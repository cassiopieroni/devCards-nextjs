import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import PagesDisplay from '../components/commonComps/PagesDisplay';
import AddCardForm from '../components/indexPage/AddCardForm';
import CardsArea from '../components/indexPage/CardsArea';

import { getGithubUser } from '../requests/getGithubUser';
import { isRepeatedCard } from '../helpers/isRepeatedCard';

import css from 'styled-jsx/css';


const HomePage = ({ errorCode, initialCards }) => {

    const router = useRouter();

    const [usernameInput, setUsernameInput] = useState('');
    const [message, setMessage] = useState('');
    const [newUser, setNewUser] = useState({});

    const [cards, setCards] = useState(initialCards);
    useEffect( () => {
        const addingNewCard = () => {
    
            setCards( [newUser, ...cards] );
            setMessage(`${newUser.login} added successfully!`);
            setUsernameInput('');
            setNewUser({});
        }

        if (newUser && newUser.id) addingNewCard();
    }, [newUser]);

    useEffect(() => {
    
        if (!cards || cards.length === 0) setMessage(`You don't have any cards  =/`);
        if (errorCode) setMessage(`Dev, we have a problem! (${errorCode})`);
    }, [cards, errorCode]);


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
        <PagesDisplay>

            <div className='container'>

                <AddCardForm 
                    handleSubmit={handleSubmitAddCard}
                    handleUsername={handleUsernameControllInput}
                    username={usernameInput}
                />

                { (message) && <p className='msg' >{message}</p> }

                { (cards && cards.length > 0) && (
                    <CardsArea 
                        cards={cards} 
                        changePage={handleChangeToUserPage} 
                        deleteCard={handleDeleteCard} 
                    />
                )}

            </div>
            
            <style jsx>{ homePageStyles }</style>

        </PagesDisplay>
    )
};

const homePageStyles = css`
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-height: 100%;
        background-color: #0f1626;
    }

    .msg {
        text-transform: uppercase;
        max-width: 550px;
        margin: 30px auto 10px;
        height: 40px;
        text-align: center;
        color: #ff533d;
    }
`;

HomePage.getInitialProps = async () => {

    const CARDS_API = 'https://api.github.com/users/rocketseat';
    // apenas simulando uma busca de cards
    // originalmente buscaria um [] de cards em uma api

    const res = await fetch(`${CARDS_API}`);
    const errorCode = res.status > 200 ? res.status : false;
    const cards = await res.json();
    console.log(res)
    const initialCards = (cards && cards.id) ? [cards] : null ; // a API retornaria um [] de cards;

    return { errorCode: null, initialCards: [] }
}

export default HomePage;