import css from 'styled-jsx/css';

const NotFoundRepo = ({ link }) => (
    <>
        <p className='msg'>
            Não encontramos este repositório! =/ <br /> 
            Você pode visitar o perfil do usuário <a target='_blanc' href={link} >clicando aqui</a> para mais informações.
        </p>

        <style jsx>{ notFoundRepoStyle }</style>
    </>
);

const notFoundRepoStyle = css`

    .msg {
        margin: 10px auto;
        text-align: center;
        width: 80%;
        height: 100px;
        color: #f5f5f5;
        line-height: 30px;
        font-size: 1.1rem;
    }

    .msg a {
        color: #0f1626;
        font-weight: bold;
    }
`

export default NotFoundRepo;