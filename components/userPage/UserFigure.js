import css from 'styled-jsx/css';

const UserFigure = ({ avatar, login }) => (

    <figure className='figureBox'>

        <img src={avatar} />
        
        <figcaption>@{login}</figcaption>    
    
        <style jsx>{ userFigureStyle }</style>

    </figure>
);

const userFigureStyle = css`

    .figureBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 0 auto;
    }

    .figureBox img {
        width: 400px;
        margin: 0 auto;
        border-radius: 5px 5px 0 0;
    }

    .figureBox figcaption {
        width: 100%;
        text-align: center;
        box-sizing: border-box;
        height: 35px;
        line-height: 35px;
        font-size: 1.1rem;
        background-color: #0f1626;
        color: #f5f5f5;
    }
`;

export default UserFigure;