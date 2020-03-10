import css from 'styled-jsx/css';

const Repositories = ({ repos }) => (

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