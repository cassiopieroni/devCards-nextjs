import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import PagesDisplay from '../../components/commonComps/PagesDisplay';
import RepositoriesArea from '../../components/userPage/RepositoriesArea';
import UserPefilBox from '../../components/userPage/UserPerfilBox';

import css from 'styled-jsx/css';

const UserPage = ({ userData, userRepos }) => {

    const [filterInputVal, setFilterInputVal] = useState('');

    const [reposToPrint, setReposToPrint] = useState(userRepos);
    useEffect( () => {

        const newReposToPrint = userRepos.filter( repo => repo.name.includes(filterInputVal) );
        setReposToPrint(newReposToPrint);
    }, [filterInputVal])

    const handleChangeFilterSearch = e => setFilterInputVal(e.target.value.toLowerCase());
    
    return (
        <PagesDisplay>

            <section className='container'>

                <UserPefilBox userData={userData} />

                { userRepos.length > 0 && (
                    <RepositoriesArea
                        repos={reposToPrint} 
                        filterInputVal={filterInputVal}
                        changeFilterSearch={handleChangeFilterSearch}
                        html_url={userData.html_url}
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
    const userData = await resUser.json();
    
    const resRepos = await fetch(`https://api.github.com/users/${user}/repos`);
    const userRepos = await resRepos.json();

    return { userData, userRepos }
}

export default UserPage;