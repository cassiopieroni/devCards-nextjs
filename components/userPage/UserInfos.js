import css from 'styled-jsx/css';

const UserInfos = ({ bio, email, blog, html_url }) => (

    <div className='userInfos'>
        
        { (bio) && <p>{bio}</p> }
        
        <div className='linksBox'>

            { (blog) && <a className='link' target='_blank' href={blog}> Blog </a> }
            
            <a className='link' target='_blank' href={html_url}> gitHub Page </a>
        
        </div>
        
        { (email) && <a className='link' href={`mailto:${email}`}>{email}</a> }
    
        <style jsx>{ userInfosStyle }</style>

    </div>
)

const userInfosStyle = css`
    
    .userInfos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 400px;
        max-width: 400px;
        height: 160px;
        max-height: 160px;
        color: #f5f5f5;
        text-transform: uppercase;
    }

    .userInfos p {
        width: 90%;
        max-height: 70px;
        height: max-content;
        line-height: 30px;
        text-transform: initial;
        margin: 10px auto;
        text-align: center;
        text-overflow: ellipsis;
        font-size: 1.1rem;
        text-overflow: hidden;
    }

    .linksBox{
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 90%;
        height: max-content;
    }

    .link {
        margin: 7px 10px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        font-size: 1rem;
        color: #f5f5f5;
        transition: all .3s ease-in-out;
        box-sizing: border-box;
    }
    .link:hover {
        transform: scale(1.05);
    }
`;

export default UserInfos;