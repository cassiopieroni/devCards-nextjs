import Card from '../card/Card';

import styles from './CardsArea.module.css';


const DeleteCard = ({ deleteCard, login }) => (

    <div className={styles.deleteBox}>
        <p onClick={ () => deleteCard(login)} > 
            delete <span className={styles.user}>{login}</span>
        </p>
    </div>
)


const CardsArea = ({ cards, deleteCard, changePage }) => (

    <section className={styles.cardsContainer}>

        { cards.map( cardData => (

            <div key={cardData.id} className={styles.cardBox}>
                
                <Card cardData={cardData} changePage={changePage} />
                
                <DeleteCard
                    deleteCard={deleteCard}
                    login={cardData.login}
                />
            
            </div>

        ))}

    </section>
)

export default CardsArea;
