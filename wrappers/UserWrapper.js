import React, { useState, useEffect } from 'react';

import RepositoriesArea from '../components/userPage/RepositoriesArea';
import UserPefilBox from '../components/userPage/UserPerfilBox';

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

    return (
        <>
            <UserPefilBox userData={userData} />

            <RepositoriesArea
                reposToPrint={reposToPrint}
                initialRepos={initialRepos}
                filterInputVal={filterInputVal}
                changeFilterSearch={handleChangeFilterSearch}
                html_url={userData.html_url}
                errorReposCode={errorReposCode}
            />
        </>
    )
}

export default UserWrapper;