import React from 'react';
import UserPerfilBox from './UserPerfilBox';
import ErrorBox from '../userPage/ErrorBox';

const NotFoundData = (props) => (
    
    <>
        { (props.errorUserCode) ? (
            <ErrorBox statusCode={props.errorUserCode} />
        ) : (
            <>
                <UserPerfilBox userData={props.userData} />
                <ErrorBox statusCode={props.errorReposCode} titleBox='Repositories' />
            </>
        )}
    </>
);

export default NotFoundData;