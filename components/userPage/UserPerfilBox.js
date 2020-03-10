import UserFigure from './UserFigure';
import UserInfos from './UserInfos';

import css from 'styled-jsx/css';
 
const UserPefilBox = ({ userData }) => {

    const { avatar_url, login, name, bio, email, blog, html_url, } = userData;

    return (

        <div className='perfilBox'>

            <UserFigure avatar={avatar_url} login={login} />

            <UserInfos
                bio={bio} 
                email={email} 
                blog={blog} 
                html_url={html_url} 
            />
        
        <style jsx>{ userPerfilBoxStyle }</style>
        
        </div>
    );
}

const userPerfilBoxStyle = css`

    .perfilBox {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        max-height: 560px;
        height: 560px;
        width: 400px;
        box-shadow: 5px 5px 15px black;
        border-radius: 5px;
        border: 1px solid #f5f5f5;
        margin: 20px auto;
        background-color: #0f1626;
    }
`

export default UserPefilBox;