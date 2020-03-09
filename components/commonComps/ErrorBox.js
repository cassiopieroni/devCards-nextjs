import css from 'styled-jsx/css';

const ErrorBox = (props) => (

    <div className='errorBox'>
        
        { props.titleBox ? <h2>{props.titleBox}</h2> : null }
        
        <div className='msgBox'>

            <span>{props.statusCode}</span>

            <div className='textBox'>
                <p>Dev, we have a problem!</p>
                <p>This data could not be found.</p>
            </div>

        </div>

        <style jsx>{ errorBoxStyle }</style>

    </div>
);

const errorBoxStyle = css`
    .errorBox {
        width: 90%;
        height: 250px;
        margin: 50px auto;
    }

    .errorBox h2 {
        width: 100%;
        background-color: #ff533d;
        text-align: center;
        color: #f5f5f5;
        text-transform: uppercase;
        box-sizing: border-box;
        height: 50px;
        line-height: 50px;
        font-size: 1.2rem;
        font-weight: bold;
        margin: 10px auto 30px;
    }
    
    .msgBox {
        display: flex;
        align-items: center;
        width: 400px;
        height: 100px;
        margin: 0 auto;
        background-color: #0f1626;
        border-radius: 4px;
        border: 2px solid #f5f5f5;
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
        width: 90%;
        margin: 10px auto;
        color: #f5f5f5;
        font-size: 1.1rem;
        text-align: center;
        height: 20px;
        line-height: 20px;
    }
`;

export default ErrorBox;