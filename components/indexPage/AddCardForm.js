import css from 'styled-jsx/css';

const AddCardForm = (props) => {

    const { handleSubmit, handleUsername, username } = props;

    return (

        <form onSubmit={ event => handleSubmit(event) } className='form' >
            
            <label htmlFor='get-username' className='label'> username </label>
            
            <input 
                className='input'
                id='get-username'
                autoFocus
                required
                type='text'  
                placeholder='gitHub username:'
                onChange={ handleUsername }
                value={username}
            />
            
            <button type="submit" className='btn' >
                add new card
            </button>
            
            <style jsx>{ addCardFormStyles }</style>
        
        </form>  
    )
}

const addCardFormStyles = css`

    .form {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 500px;
        height: 120px;
        margin: 50px auto 10px;
        position: relative;
    }

    .label {

        text-transform: uppercase;
        width: 80px;
        padding-left: 7px;
        position: absolute;
        top: -7px;
        left: 20px;
        background-color: #0f1626;
        color: #f5f5f5;
        font-size: .8rem;
    } 

    .input {

        width: 100%;
        height: 44%;
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px solid #f5f5f5;
        background-color: transparent;
        color: #f5f5f5;
        padding-left: 35px;
        font-size: 1rem;
        text-transform: uppercase;
    }

    .btn {
        text-transform: uppercase;
        width: 100%;
        height: 44%;
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid #f5f5f5;
        background-color: transparent;
        color: #f5f5f5;
        transition: all .3s ease-in-out;
        box-shadow: 1px 1px 5px #000000;
    }
        .btn:hover{

            transform: translateY(-3px);
            box-shadow: 5px 5px 15px #000000;
        }
`

export default AddCardForm;