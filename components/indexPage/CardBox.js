import React from 'react';

import Card from './Card';
import DeleteCard from './DeleteCard';

import css from 'styled-jsx/css';


const CardBox = ({ card, deleteCard, changePage }) => (

    <div className='cardBox'>

        <Card cardData={card} changePage={changePage} />
        
        <DeleteCard deleteCard={deleteCard} login={card.login} />
            
        <style jsx>{ cardBoxStyle }</style>

    </div>
);


const cardBoxStyle = css`
    
    .cardBox {
        flex: 1;
        margin: 20px 10px;
        width: 250px;
        height: 480px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`

export default CardBox;