import React from 'react';
import * as apiServices from '../requests/apiServices';
import PagesDisplay from '../components/commonComps/PagesDisplay';
import ErrorBox from '../components/commonComps/ErrorBox';
import HomeContainer from '../containers/HomeContainer';

import css from 'styled-jsx/css';

const HomePage = ({ error , initialCards }) => (
    
    <PagesDisplay>

        { (error) ? (
            <div>
                <ErrorBox statusCode={error.status} msg={error.msg} />
            </div>
        ) : (
            <HomeContainer initialCards={initialCards} /> 
        )}

        <style jsx>{ homePageStyles }</style>

    </PagesDisplay>
)

const homePageStyles = css`
    .div {
        width: 100%;
        min-height: 100%;
        background-color: #0f1626;
    }
`;

HomePage.getInitialProps = async () => {

    const cardsParams = 'cassiopieroni';
    // apenas simulando uma busca de cards
    // originalmente buscaria um [] de cards em uma api

    const res = await apiServices.getInitialData(cardsParams);
    const error  = res.status > 200 ? {status: res.status, msg: res.statusText} : false;
    const cards = await res.json();
    
    return { error , initialCards: [cards] }
}

export default HomePage;