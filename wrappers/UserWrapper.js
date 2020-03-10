import React, { useState, useEffect } from 'react';

import RepositoriesArea from '../components/userPage/RepositoriesArea';
import UserPefilBox from '../components/userPage/UserPerfilBox';

import { isListEmpty } from '../helpers/isListEmpty';

import css from 'styled-jsx/css';

const UserWrapper = ({ userData, initialRepos, errorReposCode }) => {

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

    const userHasRepos = (!isListEmpty(initialRepos));

    return (

        <section>
            
            { (userData.name) ? <h2>{userData.name}</h2> : <h2>{userData.login}</h2> }

            <div>

                <UserPefilBox userData={userData} />
            
                <RepositoriesArea
                    userHasRepos={userHasRepos}
                    login={userData.login}
                    reposToPrint={reposToPrint}
                    filterInputVal={filterInputVal}
                    changeFilterSearch={handleChangeFilterSearch}
                    html_url={userData.html_url}
                    errorReposCode={errorReposCode}
                />

            </div>

            <style jsx>{ userWrapperStyle }</style>

        </section>
    )
}

const userWrapperStyle = css`
    section {
        display: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 100%;
        background-color: #f5f5f5;
    }

    h2 {
        margin: 30px auto 30px;
        background-color: #0f1626;
        color: #f5f5f5;
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        max-width: 1000px;
        width: 90%;
        height: 50px;
        line-height: 50px;
    }

    div {
        display: flex;
        align-items: start;
        justify-content: space-between;
        flex-wrap: wrap;
        height: max-content;
        max-width: 1000px;
        width: 90%;
        margin: 0 auto; 
    }
`

export default UserWrapper;