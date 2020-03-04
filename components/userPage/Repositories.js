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
    .repo {
        margin: 10px auto;
        width: 70%;
        height: 30px;
        line-height: 30px;
    }

    .repo a {
        color: #f5f5f5; 
    }
`;


export default Repositories;