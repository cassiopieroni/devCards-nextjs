import React from 'react';
import fetch from 'isomorphic-unfetch';

import PagesDisplay from '../../components/commonComps/PagesDisplay';
import ErrorBox from '../../components/commonComps/ErrorBox';
import UserWrapper from '../../wrappers/UserWrapper';

import css from 'styled-jsx/css';

const UserPage = ({ errorUserCode, errorReposCode, userData, initialRepos }) => {

    return (

        <PagesDisplay>

            <section className='container'>

                { (errorUserCode) ? <ErrorBox statusCode={errorUserCode} /> : (
                    <UserWrapper
                        userData={userData}
                        initialRepos={initialRepos}
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
        justify-content: center;
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
    
    const resRepos = await fetch(`https://api.github.com/users/${user}/repos`);
    const errorReposCode = resRepos.status > 200 ? resRepos.status : false;
    const initialRepos = await resRepos.json();

    return { errorUserCode, errorReposCode, userData, initialRepos }
}

export default UserPage;