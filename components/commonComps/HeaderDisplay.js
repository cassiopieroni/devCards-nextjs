import React from 'react';
import Link from 'next/link';
import css from 'styled-jsx/css';

const HeaderDisplay = () => (

    <header className='headerBox'>

        <h1 className='title'>devCards</h1>

        <nav className='navBox'>

            <div className='linksBox homeBox'>
                <Link href='/'>
                    <a className='links' >HOME</a>
                </Link>
            </div>

            <div className='linksBox aboutBox'>
                <Link href='/about'>
                    <a className='links' >ABOUT</a>
                </Link>
            </div>

        </nav>

        <style jsx>{ headerDisplayStyles }</style>
        
    </header>
)

const headerDisplayStyles = css`

    .headerBox {
        width: 100%;
        height: 100px;
        background-color: #f5f5f5;
        display: flex;
    }

    .title {
        font-family: 'Montserrat Subrayada', sans-serif;
        font-size: 1.2rem;
        width: 55%;
        height: 100%;
        line-height: 100px;
        text-align: center;
        color: #0f1626;
    }

    .navBox {
        width: 45%;
        height: 100%;
        line-height: 100px;
        text-align: center;
        display: flex;
    }

    .linksBox {
        box-sizing: border-box;
        width: 50%;
        height: 100px;
    }

    .homeBox {
        background-color: #0f1626;
    }

    .aboutBox {
        background-color: #ab987a;
    }

    .links {
        padding: 8px;
        color: #f5f5f5;
        text-decoration: none;
        transition: all .5s ease-out;
        border-bottom: 1px solid transparent;
        text-transform: uppercase;
    }

        .links:hover {
            border-color: #f5f5f5;
        }  
`

export default HeaderDisplay;