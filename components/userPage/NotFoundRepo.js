import css from 'styled-jsx/css';

const NotFoundRepo = ({ link }) => (
    <>
        <p className='msg'>
            We didn't find this repository!<br /> 
            You can visit the user's profile by <a target='_blanc' href={link} >clicking here</a> for more information.
        </p>

        <style jsx>{ notFoundRepoStyle }</style>
    </>
);

const notFoundRepoStyle = css`

    .msg {
        margin: 40px auto;
        text-align: center;
        width: 80%;
        height: 100px;
        color: #f5f5f5;
        line-height: 30px;
        font-size: 1.1rem;
    }

    .msg a {
        color: #f5f5f5;
    }
`

export default NotFoundRepo;