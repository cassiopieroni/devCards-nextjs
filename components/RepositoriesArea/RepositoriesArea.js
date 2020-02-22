import styles from './RepositoriesArea.module.css';

const NotFoundRepo = ({ link }) => (

    <p className={styles.msg}>
        Não encontramos este repositório! =/ <br /> 
        Você pode visitar o perfil do usuário <a target='_blanc' href={link} >clicando aqui</a> para mais informações.
    </p>
)

const FilterBox = ({ changeFilterSearch, filterInputVal }) => (
    
    <div className={styles.filterBox}>
        <input
            onChange={ e => changeFilterSearch(e) } 
            value={filterInputVal} 
            placeholder={'buscar repositório: '}    
        />
    </div>
)

const Repositories = ({ repos }) => (

    <ul>
        { repos.map( repo =>  
            <li className={styles.repo} key={repo.id} >
                <a target='_blank' href={repo.html_url}>
                    {repo.name}
                </a>
            </li>
        )}
    </ul>
)

const RepositoriesArea = ({ repos, html_url, filterInputVal, changeFilterSearch }) => {

    return (
        <div className={styles.reposArea}>
            
            <h3>Repositories</h3>

            <FilterBox filterInputVal={filterInputVal} changeFilterSearch={changeFilterSearch} />

            { (repos.length === 0) 
                ? <NotFoundRepo link={html_url}/>
                : <Repositories repos={repos}/>
            }

            { (repos.length >= 30) && (
                <a className={styles.linkToPage} target='_blanc' href={html_url}>ver mais</a> 
            )}
        
        </div>
    )
}

export default RepositoriesArea;