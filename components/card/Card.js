import React from 'react'

import styles from './Card.module.css';

const PerfilImage = ({ avatar_url, login }) => (

    <figure className={styles.avatar}>

        <img src={avatar_url}/>
        
        <figcaption>@{login}</figcaption>
    
    </figure>
)

const PerfilInfos = ({ name, bio, public_repos }) => (

    <div className={styles.cardInfos}>
        
        <h3>{name}</h3>
        
        { (bio) && <p className={styles.bio}>{bio}</p>}

            
        <p className={styles.repos}> 
            <span>{public_repos}</span> {
                (public_repos > 1) ? 'repositories' : 'repository'
            }
        </p>
    
    </div>
)

const Card = ({ cardData, changePage }) => {

    const { avatar_url, name, login, bio, public_repos } = cardData;

    return (
        <div className={styles.card} onClick={ () => changePage(login) } >

            <PerfilImage avatar_url={avatar_url} login={login} />

            <PerfilInfos name={name} bio={bio} public_repos={public_repos} />

        </div>
    )
}

export default Card;