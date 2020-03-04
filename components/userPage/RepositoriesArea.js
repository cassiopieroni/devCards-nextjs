import React from 'react';

import FilterBox from './FilterBox';
import NotFoundRepo from './NotFoundRepo';
import Repositories from './Repositories';

import css from 'styled-jsx/css';

const RepositoriesArea = ({ repos, html_url, filterInputVal, changeFilterSearch }) => {

    return (
        <div className='reposArea'>
            
            <h3>Repositories</h3>

            <FilterBox filterInputVal={filterInputVal} changeFilterSearch={changeFilterSearch} />

            { (repos.length === 0) 
                ? <NotFoundRepo link={html_url}/>
                : <Repositories repos={repos}/>
            }

            { (repos.length >= 30) && (
                <a className='linkToPage' target='_blanc' href={html_url}>ver mais</a> 
            )}
        
            <style jsx>{ repositoriesAreaStyle }</style>

        </div>
    )
}

const repositoriesAreaStyle = css`
    .reposArea {
        display: flex;
        flex-direction: column;
        width: 90%;
        min-height: 1100px;
    }

    .reposArea h3 {
        text-align: center;
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin: 30px auto 30px;
        background-color: #ff533d;
        color: #f5f5f5;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.1rem;
    }

    .linkToPage {
        margin: 10px auto 30px;
        width: 100px;
        text-align: center;
        height: 30px;
        line-height: 30px;
        color: #f5f5f5;
        font-size: 1.1rem;
    }
`

export default RepositoriesArea;