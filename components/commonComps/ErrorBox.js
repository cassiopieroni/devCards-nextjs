import css from 'styled-jsx/css';

const ErrorBox = (props) => (

        
    <div className='msgBox'>

        <span>{props.statusCode}</span>

        <div className='textBox'>
            <p>Dev, we have a problem!</p>
            
            { (props.msg) ? (
                <p>{props.msg}</p>
            ) : (
                <p>This data could not be found.</p>
            )}
        
        </div>

        <style jsx>{ errorBoxStyle }</style>

    </div>
);

const errorBoxStyle = css`
    .errorBox h2 {
        width: 380px;
        background-color: #ff533d;
        text-align: center;
        color: #f5f5f5;
        text-transform: uppercase;
        box-sizing: border-box;
        height: 50px;
        line-height: 50px;
        font-size: 1.2rem;
        font-weight: bold;
        margin: 50px auto;
    }
    
    .msgBox {
        display: flex;
        align-items: center;
        width: 380px;
        height: 100px;
        margin: 100px auto;
        background-color: #0f1626;
        border-radius: 4px;
        border: 1px solid #f5f5f5;
    }

    .msgBox span {
        width: 30%;
        height: 80px;
        line-height: 80px;
        font-size: 2.8rem;
        padding-right: 5px;
        color: #f5f5f5;
        border-right: 3px solid #f5f5f5;
        text-align: center;
        margin: 10px 0;
    }

    .textBox {
        width: 70%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }


    .textBox p {
        width: 95%;
        margin: 10px auto;
        color: #f5f5f5;
        font-size: 1.1rem;
        text-align: center;
        height: 20px;
        line-height: 20px;
    }
`;

export default ErrorBox;