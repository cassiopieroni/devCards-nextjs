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
        justify-content: space-between;
        width: 400px;
        max-width: 400px;
        max-height: 160px;
        height: max-content;
        color: #0f1626;
        text-transform: uppercase;
    }

    .userInfos p {
        width: 90%;
        max-height: 80px;
        height: max-content;
        line-height: 35px;
        text-transform: initial;
        margin: 10px auto;
        text-align: center;
        font-size: 1.1rem;
        overflow: hidden;
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
        color: #0f1626;
    }
`;

export default UserInfos;