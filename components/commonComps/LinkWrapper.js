import React from 'react';
import Link from 'next/link';
import css from 'styled-jsx/css';

const LinkWrapper = (props) => (
    
    <>
        <Link href={props.to}>
            <a className={props.className} {...props} >{props.children}</a>
        </Link>
        
        <style jsx>{ linkWrapperStyle }</style>
    </>
)

const linkWrapperStyle = css`

    .headerLinks {
        padding: 8px;
        color: #f5f5f5;
        text-decoration: none;
        transition: all .5s ease-out;
        border-bottom: 1px solid transparent;
        text-transform: uppercase;
    }

        .headerLinks:hover {
            border-color: #f5f5f5;
        }
`;

export default LinkWrapper;