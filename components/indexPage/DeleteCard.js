import css from 'styled-jsx/css';

const DeleteCard = ({ deleteCard, login }) => (

    <div className='deleteBox'>
        
        <p onClick={ () => deleteCard(login)} >{`delete ${login}`}</p>

        <style jsx>{ deleteCardStyle }</style>

    </div>
)


const deleteCardStyle = css`

    .deleteBox {
        text-align: center;
        margin: 5px auto 0;
        width: 250px;
        height: 30px;
        line-height: 30px;
        max-width: 250px;
        font-size: .9rem;
        transition: all .3s ease-in-out;
    }

    .deleteBox p {
        margin: 0 auto;
        width: max-content;
        height: max-content;
        border: 1px solid transparent;
        transition: all .3s ease-in-out;
        color: #f5f5f5;
        cursor: pointer;
    }

    .deleteBox p:hover {
        border-bottom-color: #f5f5f5;
    }
`;

export default DeleteCard;