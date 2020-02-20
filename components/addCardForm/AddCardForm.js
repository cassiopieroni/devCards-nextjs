import styles from './AddCardForm.module.css';

const AddCardForm = (props) => {

    const { handleSubmit, handleUsername, username } = props;

    return (

        <div className={styles.formWrapper}>
            <form onSubmit={ event => handleSubmit(event) } className={styles.form} >
                
                <label htmlFor='get-username' className={styles.label}> username </label>
                
                <input 
                    className={styles.input}
                    id='get-username'
                    autoFocus
                    required
                    type='text'  
                    placeholder='gitHub username:'
                    onChange={ handleUsername }
                    value={username}
                />
                
                <button type="submit" className={styles.btn} >
                    add new card
                </button>
            
            </form>
        
        </div>
    )
} 

export default AddCardForm;