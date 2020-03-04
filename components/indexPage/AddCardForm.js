import css from 'styled-jsx/css';

const AddCardForm = (props) => {

    const { handleSubmit, handleUsername, username } = props;

    return (

        <div className='formWrapper'>
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
            
            </form>
        
            <style jsx>{ addCardFormStyles }</style>
        </div>
    )
}

const addCardFormStyles = css`

    .formWrapper {

        margin: 50px auto 10px;
        padding: 10px 5px;
        width: 550px;
        max-width: 550px;
        min-width: 450px;
        height: 130px;
    }

    .form {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        height: 120px;
        margin: 5px auto;
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
        height: 45%;
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
        height: 45%;
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid #f5f5f5;
        background-color: transparent;
        color: #f5f5f5;
        transition: all .4s ease-in-out;
    }
        .btn:hover{

            transform: translateY(-3px);
            box-shadow: 3px 3px 10px #000000;
        }
`

export default AddCardForm;