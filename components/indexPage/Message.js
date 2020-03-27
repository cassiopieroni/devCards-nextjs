import React from 'react';

import css from 'styled-jsx/css';

const Message = ({ status, text }) => {

    if(!text)
        return null; 

        
    const classStyle = `msg ${status}`;
    return (
        <>
            <p className={classStyle}>{text}</p>
            <style jsx>{ messageStyle }</style>
        </>
    )
}


const messageStyle = css`
    .msg {
            text-transform: uppercase;
            max-width: 550px;
            margin: 20px auto 10px;
            height: 30px;
            line-height: 30px;
            text-align: center;
        }
    .success {
        color: green;
    }
    .error {
        color: red;
    }
`

export default Message;