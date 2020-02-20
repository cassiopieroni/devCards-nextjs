import styles from './UserHeader.module.css';

const UserPerfil = ({ avatar, login }) => (

    <figure className={styles.figureBox}>

        <img src={avatar} />
        
        <figcaption>@{login}</figcaption>    
    
    </figure>
)


const UserInfos = ({ bio, email, blog, html_url }) => (

    <div className={styles.userInfos}>
        
        { (bio) && <p>{bio}</p> }
        
        <div className={styles.linksBox}>

            { (blog) && <a className={styles.link} target='_blank' href={blog}> Blog </a> }
            
            <a className={styles.link} target='_blank' href={html_url}> gitHub Page </a>
        
        </div>
        
        { (email) && <a className={styles.link} href={`mailto:${email}`}>{email}</a> }
    
    </div>
)

 
const UserHeader = ({ userData }) => {

    const { avatar_url, login, name, bio, email, blog, html_url, } = userData;

    return (
        <div className={styles.userWrapper}>

            <h2>{name}</h2>

            <div className={styles.perfilBox}>

                <UserPerfil avatar={avatar_url} login={login} />

                <UserInfos
                    bio={bio} 
                    email={email} 
                    blog={blog} 
                    html_url={html_url} 
                />

            </div>

        </div>
    );
}

export default UserHeader;