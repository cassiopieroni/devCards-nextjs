import css from 'styled-jsx/css';

const CardFigure = ({ avatar_url, login }) => (

    <figure className='avatar'>

        <img src={avatar_url}/>
        
        <figcaption>@{login}</figcaption>

        <style jsx>{ cardFigureStyle }</style>
    
    </figure>
)

const cardFigureStyle = css`

    .avatar {
        max-width: 350px;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .avatar img {
        border-radius: 2px 2px 0 0;
        width: 100%;
        margin: 0 auto;
    }

    .avatar figcaption {
        width: 100%;
        text-align: end;
        padding-right: 5px;
        margin: 5px auto;
        box-sizing: border-box;
        font-size: .9rem;
        color: #0f1626;
    }
`

export default CardFigure;