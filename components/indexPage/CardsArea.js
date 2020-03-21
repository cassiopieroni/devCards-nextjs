import React from 'react';
import CardBox from './CardBox';
import css from 'styled-jsx/css';


const CardsArea = ({ cards, deleteCard, changePage }) => {

    if (cards && cards.length) {
        return (
            <section className='cardsContainer'>

                { cards.map( card => (
                    <CardBox 
                        key={card.id}
                        card={card}
                        deleteCard={deleteCard}
                        changePage={changePage}
                    />
                ))}

                <style jsx>{ cardsAreaStyle }</style>

            </section>
        )
    }
    return null;
}

const cardsAreaStyle = css`

    .cardsContainer {
        margin: 20px auto;
        max-width: 90%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        flex: 1;
    }
`

export default CardsArea;
