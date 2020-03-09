import React from 'react';
import fetch from 'isomorphic-unfetch';

import PagesDisplay from '../components/commonComps/PagesDisplay';
import ErrorBox from '../components/commonComps/ErrorBox';
import HomeWrapper from '../wrappers/HomeWrapper';

import css from 'styled-jsx/css';

const HomePage = ({ errorCode, initialCards }) => {

    return (
        <PagesDisplay>

            <div className='container'>

                { (errorCode) 
                    ? <ErrorBox statusCode={errorCode} />
                    : <HomeWrapper initialCards={initialCards} /> 
                }

            </div>
            
            <style jsx>{ homePageStyles }</style>

        </PagesDisplay>
    )
};

const homePageStyles = css`
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 100%;
        background-color: #0f1626;
    }
`;

HomePage.getInitialProps = async () => {

    const CARDS_API = 'https://api.github.com/users/cassiopieroni';
    // apenas simulando uma busca de cards
    // originalmente buscaria um [] de cards em uma api

    const res = await fetch(`${CARDS_API}`);
    const errorCode = res.status > 200 ? res.status : false;
    const cards = await res.json();

    return { errorCode, initialCards: [cards] }
}

export default HomePage;