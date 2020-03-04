import React from 'react';
import Head from 'next/head';

import HeaderDisplay from './HeaderDisplay';

import css from 'styled-jsx/css';


const PagesDisplay = (props) => (

    <>
        <Head>

            <title>devCards</title>
            <link href="https://fonts.googleapis.com/css?family=Montserrat+Subrayada&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet" />
        
        </Head>
        
        <div className='wrapper'>

            <HeaderDisplay />
            
            <div className='pageContent'>
                {props.children}
            </div>
        
        </div>

        <style jsx>{ PagesDisplayStyles }</style>

    </>
)

const PagesDisplayStyles = css`

    .wrapper {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        max-width: 1400px;
        height: 100vh;
        background-color: #f5f5f5;
    }
    
    .pageContent {
        width: 100%;
        height: 100%;
    }
`

export default PagesDisplay;