import React from 'react';
import NotFoundRepo from './NotFoundRepo';
import css from 'styled-jsx/css';

const Repositories = ({ repos, html_url }) => {
    if (repos.length) {
        return (
            <>
                <ul>
                    { repos.map( repo =>  
                        <li className='repo' key={repo.id} >
                            <a target='_blank' href={repo.html_url}>
                                {repo.name}
                            </a>
                        </li>
                    )}
                </ul>

                <style jsx>{ repositoriesStyle }</style>
            </>
        )
    } else 
        return <NotFoundRepo link={html_url}/>
}

const repositoriesStyle = css`
    ul {
        width: 95%;
        margin: auto;
        height: 390px;
        overflow: auto;
    }
    .repo {
        margin: 10px 0;
        width: max-content;
        height: 30px;
        line-height: 30px;
        transition: all .3s ease-in-out;
    }
        .repo:hover {
            padding-left: 5px;
        }
    .repo a {
        color: #f5f5f5;
        margin: 10px;
    }  
`;


export default Repositories;