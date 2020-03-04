import UserFigure from './UserFigure';
import UserInfos from './UserInfos';

import css from 'styled-jsx/css';
 
const UserPefilBox = ({ userData }) => {

    const { avatar_url, login, name, bio, email, blog, html_url, } = userData;

    return (
        <div className='userWrapper'>

            { (name) ? <h2>{name}</h2> : <h2>{login}</h2> }

            <div className='perfilBox'>

                <UserFigure avatar={avatar_url} login={login} />

                <UserInfos
                    bio={bio} 
                    email={email} 
                    blog={blog} 
                    html_url={html_url} 
                />

            </div>

            <style jsx>{ userPerfilBoxStyle }</style>

        </div>
    );
}

const userPerfilBoxStyle = css`

    .userWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        width: 90%;
        margin: 40px auto;
    }

    .userWrapper h2 {
        margin: 10px auto 30px;
        background-color: #0f1626;
        color: #f5f5f5;
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        width: 100%;
        height: 50px;
        line-height: 50px;
    }

    .perfilBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: max-content;
        width: 400px;
        background-image: linear-gradient(#0f1626, #f5f5f5, #f5f5f5);
        box-shadow: 5px 5px 15px black;
        border-radius: 5px;
        border: 1px solid #f5f5f5;
    }
`

export default UserPefilBox;