import React from 'react';

import * as apiServices from '../../requests/apiServices';

import PagesDisplay from '../../components/commonComps/PagesDisplay';
import ErrorBox from '../../components/commonComps/ErrorBox';
import UserContainer from '../../containers/UserContainer';

import css from 'styled-jsx/css';

const UserPage = ({ errorUser, errorRepos, userData, initialRepos }) => {

    return (

        <PagesDisplay>

            { (errorUser) ? (
                <div>
                    <ErrorBox statusCode={errorUser.status} msg={errorUser.msg} /> 
                </div>
            ) : (
                <UserContainer
                    userData={userData}
                    initialRepos={initialRepos}
                    errorRepos={errorRepos}
                />
            )}

            <style jsx>{ userPageStyle }</style>

        </PagesDisplay>
    )
}


const userPageStyle = css`
    div {
        width: 100%;
        min-height: 100%;
        background-color: #f5f5f5;
    }
`


UserPage.getInitialProps = async ctx => {

    const { user } = ctx.query;

    const resUser = await apiServices.getInitialData(user);
    const errorUser = resUser.status > 200 ? {status: resUser.status, msg: resUser.statusText} : false;
    const userData = await resUser.json();
    
    const resRepos = await apiServices.getInitialRepos(user);
    const errorRepos = resRepos.status > 200 ? {status: resRepos.status, msg: resRepos.statusText} : false;
    const initialRepos = await resRepos.json();

    return { errorUser, errorRepos, userData, initialRepos }
}

export default UserPage;