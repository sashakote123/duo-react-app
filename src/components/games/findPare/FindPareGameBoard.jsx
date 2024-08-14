import { useEffect } from "react";
import { useSelector } from "react-redux";

import WordItem from "./WordItem";


const FindPareGameBoard = () => {
    const words = useSelector(state => state.words.words);
    const translates = useSelector(state => state.translate.translate);



    useEffect(() => {
        let cards = document.querySelectorAll('.word__item');
        cards.forEach(item => {
            if (item.firstChild === null) item.classList.add('invisible')
        })

    }, [words, translates])



    return (
        <div className="words__container">


            <div className="words__column">

                {words.map((word, index) => {
                    while (index < 5)
                        return <WordItem key={word.id} word={word.word} />
                    return null
                })}
            </div>
            <div className="words__column">
                {translates.map((word, index) => {
                    while (index < 5)
                        return <WordItem key={word.id} word={word.translate} />
                    return null
                })}
            </div>

        </div>
    );
}

export default FindPareGameBoard;