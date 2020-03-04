import CardFigure from './CardFigure';
import CardInfos from './CardInfos';

import css from 'styled-jsx/css';

const Card = ({ cardData, changePage }) => {

    const { login, avatar_url, name, bio, public_repos } = cardData;

    return (
        <div className='card' onClick={ () => changePage(login)} >

            <CardFigure 
                avatar_url={avatar_url} 
                login={login}
            />

            <CardInfos 
                name={name}
                login={login}
                bio={bio} 
                public_repos={public_repos} 
            />

            <style jsx>{ cardStyle }</style>

        </div>
    )
};

const cardStyle = css`
    
    .card{
        margin: 0 auto;
        max-width: 250px;
        min-height: 420px;
        height: max-content;
        background-image: linear-gradient(#0f1626, #ffffff);
        color: #0f1626;
        cursor: pointer;
        border-radius: 2px;
        border: 1px solid #f5f5f5;
        transition: all .4s ease-in-out;
        flex: 1;
        box-shadow: 2px 2px 3px black;
    }
        .card:hover {
            transform: translateY(-15px);
            box-shadow: 13px 13px 12px black;
        }
`



export default Card;