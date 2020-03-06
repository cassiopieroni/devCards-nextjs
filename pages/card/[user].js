import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import PagesDisplay from '../../components/commonComps/PagesDisplay';
import RepositoriesArea from '../../components/userPage/RepositoriesArea';
import UserPefilBox from '../../components/userPage/UserPerfilBox';
import NotFoundData from '../../components/userPage/NotFoundData';

import css from 'styled-jsx/css';

const UserPage = ({ errorUserCode, errorReposCode, userData, initialRepos }) => {

    const [filterInputVal, setFilterInputVal] = useState('');

    const [reposToPrint, setReposToPrint] = useState(initialRepos);

    useEffect( () => {
        const printingFilteredRepos = () => {
            const newReposToPrint = initialRepos.filter( repo => repo.name.includes(filterInputVal) );
            setReposToPrint(newReposToPrint);
        }

        if (initialRepos.length > 0) 
            printingFilteredRepos();
    }, [filterInputVal])

    
    const handleChangeFilterSearch = e => setFilterInputVal(e.target.value.toLowerCase());

    return (

        <PagesDisplay>

            <section className='container'>

                { (!errorUserCode && !errorReposCode) ? (

                    <>
                        <UserPefilBox userData={userData} />

                        <RepositoriesArea
                            reposToPrint={reposToPrint}
                            initialRepos={initialRepos}
                            filterInputVal={filterInputVal}
                            changeFilterSearch={handleChangeFilterSearch}
                            html_url={userData.html_url}
                        />
                    </>

                ) : (
                    <NotFoundData
                        userData={userData}
                        errorUserCode={errorUserCode}
                        errorReposCode={errorReposCode}
                    />
                )}

            </section>

            <style jsx>{ userPageStyle }</style>

        </PagesDisplay>
    )
}
        

const userPageStyle = css`
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-height: 100%;
        background-color: #f5f5f5;
        background-image: linear-gradient(#f5f5f5, #0f1626);
    }
`


UserPage.getInitialProps = async ctx => {

    const { user } = ctx.query;

    const resUser = await fetch(`https://api.github.com/users/${user}`);
    const errorUserCode = resUser.status > 200 ? resUser.status : false;
    const userData = await resUser.json();
    
    const resRepos = await fetch(`https://api.github.com/usrs/${user}/repos`);
    const errorReposCode = resRepos.status > 200 ? resRepos.status : false;
    const initialRepos = await resRepos.json();

    return { errorUserCode, errorReposCode, userData, initialRepos }
}

export default UserPage;