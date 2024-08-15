import { useParams } from "react-router";
import CardGameBoard from "./CardsGameBoard";
import CardsGameHeader from "./CardsGameHeader";
import { themesList } from "../../../lists/themesList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changeTheme } from "../../../store/currentThemeSlice";

const CardGame = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const obj = themesList.find(item => item.theme === id)

    useEffect(() => {

        dispatch(changeTheme(obj))

    }, [dispatch, obj])
    return (
        <div className="game-container">
            <CardsGameHeader />
            <CardGameBoard />
        </div>
    );
}

export default CardGame;