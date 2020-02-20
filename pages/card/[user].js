import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import PageDisplay from '../../components/pageDisplay/PageDisplay';
import RepositoriesArea from '../../components/RepositoriesArea/RepositoriesArea';
import UserHeader from '../../components/userHeader/UserHeader';

import styles from '../../components/UserPage.module.css';


const UserPage = ({ userData, userRepos }) => {

    const [filterInputVal, setFilterInputVal] = useState('');

    const [reposToPrint, setReposToPrint] = useState(userRepos);
    useEffect( () => {

        const newReposToPrint = userRepos.filter( repo => repo.name.includes(filterInputVal) );
        setReposToPrint(newReposToPrint);
    }, [filterInputVal])


    const handleChangeFilterSearch = e => setFilterInputVal(e.target.value.toLowerCase());

    
return (
        <PageDisplay>

            <section className={styles.container}>

                <UserHeader userData={userData} />

                { userRepos.length > 0 && (
                    <RepositoriesArea
                        repos={reposToPrint} 
                        filterInputVal={filterInputVal}
                        changeFilterSearch={handleChangeFilterSearch}
                        html_url={userData.html_url}
                    />
                )}

            </section>

        </PageDisplay>
    )
}


UserPage.getInitialProps = async ctx => {

    const { user } = ctx.query;

    const resUser = await fetch(`https://api.github.com/users/${user}`);
    const userData = await resUser.json();
    
    const resRepos = await fetch(`https://api.github.com/users/${user}/repos`);
    const userRepos = await resRepos.json();

    return { userData, userRepos }
}

export default UserPage;