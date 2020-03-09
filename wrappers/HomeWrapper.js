import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import AddCardForm from '../components/indexPage/AddCardForm';
import CardsArea from '../components/indexPage/CardsArea';

import { getGithubUser } from '../requests/getGithubUser';
import { isRepeatedCard } from '../helpers/isRepeatedCard';

import css from 'styled-jsx/css';


const HomeWrapper = ({ initialCards }) => {

    const router = useRouter();

    const [usernameInput, setUsernameInput] = useState('');
    const [message, setMessage] = useState('');
    const [newUser, setNewUser] = useState({});
    const [cards, setCards] = useState(initialCards);
    
    useEffect(() => {
        if (cards.length === 0) setMessage(`You don't have any cards yet  =/`);
    }, []);
    
    useEffect( () => {
        const addingNewCard = () => {
            setCards( [newUser, ...cards] );
            setMessage(`${newUser.login} added successfully!`);
            setUsernameInput('');
        }

        if (newUser && newUser.id) addingNewCard();
    }, [newUser]);


    const fetchingCard = async () => {    
        try {
            const githubResponse = await getGithubUser(usernameInput);
            const user = await githubResponse.json();
            
            return (user && user.id) 
                ? setNewUser(user)
                : setMessage(`${usernameInput} is an invalid user`);
        
        } catch (err) {
            setMessage(`Couldn't add a new card (${err}).`)
        }
    }


    //------ EVENT HANDLE FUNCTIONS ---------------
    const handleSubmitAddCard = e => {
        e.preventDefault();
        setMessage('Loading...');

        return ( isRepeatedCard(cards, usernameInput) ) 
            ? setMessage(`${usernameInput} is already on your card list.`) 
            : fetchingCard();
    }

    const handleUsernameControllInput = e => setUsernameInput(e.target.value);

    const handleChangeToUserPage = userLogin => router.push('/card/[user]', `/card/${userLogin}`);

    const handleDeleteCard = userLogin => {    
        const newCards = cards.filter( card => card.login !== userLogin);
        setCards(newCards);
        setMessage(`${userLogin} has been successfully deleted.`)
    }
    //------ EVENT HANDLE FUNCTIONS ---------------

    return (      
        <>
            <AddCardForm 
                handleSubmit={handleSubmitAddCard}
                handleUsername={handleUsernameControllInput}
                username={usernameInput}
            />

            <p className='msg' >{message}</p>

            { (cards && cards.length > 0) && (
                <CardsArea 
                    cards={cards} 
                    changePage={handleChangeToUserPage} 
                    deleteCard={handleDeleteCard} 
                />
            )}
            
            <style jsx>{ msgStyle }</style>
        </>
    )
}

const msgStyle = css`
    .msg {
            text-transform: uppercase;
            max-width: 550px;
            margin: 30px auto 10px;
            height: 40px;
            text-align: center;
            color: #ff533d;
        }
`;

export default HomeWrapper;