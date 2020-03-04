import css from 'styled-jsx/css';

const CardInfos = ({ name, login, bio, public_repos }) => (

    <div className='cardInfos'>
        
        { (name) ? <h3>{name}</h3> : <h3>{login}</h3> }
        
        { (bio) ? <p className='bio'>{bio}</p> : null }
            

        { (public_repos > 0) ? (
            <p className='repos'>
                <span>{ public_repos }</span> { (public_repos > 1) ? 'repositories' : 'repository'}
            </p>
        ) : (
            <p className='repos'> no repository yet </p>
        )}

        <style jsx>{ cardInfosStyle }</style>
    
    </div>
);

const cardInfosStyle = css`
    
    .cardInfos {
        height: 165px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
    }

    .cardInfos h3 {
        margin: 5px auto;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        text-transform: uppercase;
        background-color: #ff533d;
        box-sizing: border-box;
        font-size: .9rem;
        color: #ffffff;
    }

    .bio {
        width: 90%;
        min-height: 60px;
        height: max-content;
        margin: 10px auto;
        text-align: justify;
        box-sizing: border-box;
        overflow: hidden;
    }

    .repos  {
        height: 20px;
        margin-bottom: 5px;
        text-align: center;
    }

    .repos span {
        font-weight: bold;
    }
`

export default CardInfos;