import { createContext, useState } from "react";
export const CardContext = createContext();
export const CardProvider = ({ children }) => {
    const [listCards, setListCards] = useState([]);
    const [chooseCard, setChooseCard] = useState(null);
    const handleUpdateListCards = (newListCards) => {
        setListCards(newListCards);
    }
    // console.log('chooseCard', chooseCard);
    const values = {
        listCards,
        updateListCards: handleUpdateListCards,
        chooseCard,
        setChooseCard
    }
    return (
        <CardContext.Provider value={values}>
            {children}
        </CardContext.Provider>
    )
}