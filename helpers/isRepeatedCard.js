const isRepeatedCard = (cardsList, newUserLogin) => {

    if (cardsList.length === 0) return false;

    if (cardsList[0].login.toLowerCase() === newUserLogin.toLowerCase()) return true;

    return isRepeatedCard(cardsList.slice(1), newUserLogin);
}


export {
    isRepeatedCard,
}