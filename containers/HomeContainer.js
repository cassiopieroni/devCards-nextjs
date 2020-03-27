import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import AddCardForm from '../components/indexPage/AddCardForm';
import CardsArea from '../components/indexPage/CardsArea';
import Message from '../components/indexPage/Message';

import * as apiServices from '../requests/apiServices';
import { isRepeatedCard } from '../helpers/isRepeatedCard';

import css from 'styled-jsx/css';


const HomeContainer = ({ initialCards }) => {

    const router = useRouter();

    const [cards, setCards] = useState(initialCards);
    const [message, setMessage] = useState({});
    const [usernameInput, setUsernameInput] = useState('');
    const [newUser, setNewUser] = useState({});
    

    useEffect(() => {
        if (!cards.length)
            handleErrorMsg(`You don't have any cards yet  =/`);
    }, []);
    
    useEffect( () => {
        const addingNewCard = () => {
            setCards( [newUser, ...cards] );
            handleSuccessMsg(`${newUser.login} added successfully!`);
            setUsernameInput('');
        }

        if (newUser && newUser.id) addingNewCard();
    }, [newUser]);


    const fetchingCard = () => {   
        apiServices.getGithubUser(usernameInput)
            .then(user => setNewUser(user))
            .catch( err => handleErrorMsg(`Couldn't add a new card (${err}).`))
    }


    //------ EVENT HANDLE FUNCTIONS --------------
    const handleSubmitAddCard = e => {
        e.preventDefault();
        handleSuccessMsg('Loading...');

        return ( isRepeatedCard(cards, usernameInput) ) 
            ? handleErrorMsg(`${usernameInput} is already on your card list.`) 
            : fetchingCard();
    }

    const handleUsernameControllInput = e => setUsernameInput(e.target.value);

    const handleChangeToUserPage = userLogin => router.push('/card/[user]', `/card/${userLogin}`);

    const handleDeleteCard = userLogin => {    
        const newCards = cards.filter( card => card.login !== userLogin);
        setCards(newCards);
        handleSuccessMsg(`${userLogin} has been successfully deleted.`)
    }

    const handleSuccessMsg = text => setMessage({ ...message, status: 'success', text });
    const handleErrorMsg = text => setMessage({ ...message, status: 'error', text });
    //------ EVENT HANDLE FUNCTIONS ---------------

    return (

        <div>
            <AddCardForm 
                handleSubmit={handleSubmitAddCard}
                handleUsername={handleUsernameControllInput}
                username={usernameInput}
            />

            <Message status={message.status} text={message.text} />

            <CardsArea 
                cards={cards} 
                changePage={handleChangeToUserPage} 
                deleteCard={handleDeleteCard} 
            />
            
            <style jsx>{ msgStyle }</style>
        </div>
    )
}

const msgStyle = css`
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        width: 100%;
        min-height: 100%;
        background-color: #0f1626;
        }
    /* .msg {
        text-transform: uppercase;
        max-width: 550px;
        margin: 20px auto 10px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #ff533d;
    } */
`;

export default HomeContainer;