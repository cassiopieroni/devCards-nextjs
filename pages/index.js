import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import PageDisplay from '../components/pageDisplay/PageDisplay';
import AddCardForm from '../components/addCardForm/AddCardForm';
import CardsArea from '../components/cardsArea/CardsArea';

import { getGithubUser } from '../requests/getGithubUser';
import { isRepeatedCard } from '../helpers/isRepeatedCard';

import styles from '../components/HomePage.module.css';


const HomePage = ({ cardsData }) => {

    const router = useRouter();

    const [usernameInput, setUsernameInput] = useState('');
    const [message, setMessage] = useState('');
    const [newUser, setNewUser] = useState({});

    const [cards, setCards] = useState(cardsData);
    useEffect( () => {
        const addingNewCard = () => {
    
            setCards( [newUser, ...cards] );
            setMessage(`${newUser.login} adicionado com sucesso!`);
            setUsernameInput('');
            setNewUser({})
        }

        if (newUser && newUser.id) addingNewCard();
    }, [newUser]);

    useEffect(() => {
    
        if (cards.length === 0) setMessage('Você não possui nenhum card =/');
    }, [cards]);

    const fetchingCard = async githubUsername => {
        
        try {
            const githubResponse = await getGithubUser(githubUsername);
            const user = await githubResponse.json();
            
            (user && user.id) 
                ? setNewUser(user)
                : setMessage(`${githubUsername} é um usuário inválido`);
        
        } catch (err) {
            setMessage(`Não foi possível adicionar um novo card (${err}).`)
        }
    }


    //------ EVENT HANDLE FUNCTIONS ---------------
    const handleSubmitAddCard = e => {
        
        e.preventDefault();
        setMessage('carregando...');
        const username = usernameInput;

        return ( isRepeatedCard(cards, username) ) 
            ? setMessage(`${username} já faz parte da sua lista de cards.`) 
            : fetchingCard(username);
    }

    const handleUsernameControllInput = e => setUsernameInput(e.target.value);

    const handleChangePage = userLogin => router.push('/card/[user]', `/card/${userLogin}`);

    const handleDeleteCard = userLogin => {
        
        const newCards = cards.filter( card => card.login !== userLogin);
        setCards(newCards);
        setMessage(`${userLogin} foi deletado com sucesso.`)
    }
    //------ EVENT HANDLE FUNCTIONS ---------------

    
    return (
        <PageDisplay>

            <div className={styles.container}>

                <AddCardForm 
                    handleSubmit={handleSubmitAddCard}
                    handleUsername={handleUsernameControllInput}
                    username={usernameInput}
                />

                { (message) && <p className={styles.msg} >{message}</p> }

                { (cards.length > 0) && (
                    <CardsArea 
                        cards={cards} 
                        changePage={handleChangePage} 
                        deleteCard={handleDeleteCard} 
                    />
                )}

            </div>

        </PageDisplay>
    )
};

HomePage.getInitialProps = async () => {

    const CARDS_API = 'https://api.github.com/users/rocketseat';
    // apenas simulando uma busca de cards
    // originalmente buscaria um [] de cards em uma api

    const res = await fetch(`${CARDS_API}`);
    const cards = await res.json();

    const cardsData = [cards]; // a API retornaria um [] de cards;

    return { cardsData }
}

export default HomePage;