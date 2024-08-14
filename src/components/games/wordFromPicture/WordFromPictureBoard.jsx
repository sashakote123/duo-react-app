import { useDispatch, useSelector } from "react-redux";
import GifSearch from "../../common/GifSearch";
import MainButton from "../../common/MainButton";
import { useEffect, useMemo, useRef, useState } from "react";
import { addError, clearErrors } from "../../../store/accuracySlice";
import { addStreak, breakStreak } from "../../../store/streakSlice";
import { randomInteger, shuffleArray } from "../../../helpers/methods";
import { updateCurrentWord } from "../../../store/initialShufflesSlice";
import LevelComplete from "../../common/LevelComplete";
import KUTE from 'kute.js';


let tmpArray = [{ translate: null }, { translate: null }, { translate: null }, { translate: null },]

let i = 0;

const generateArray = (i, wordsArray) => {
    let indexesArray = [i];
    while (indexesArray.length !== 4) {
        let tmpInd = randomInteger(0, wordsArray.length)
        if (tmpInd !== i) indexesArray.push(tmpInd)
    }
    indexesArray = shuffleArray(indexesArray);
    return [wordsArray[indexesArray[0]], wordsArray[indexesArray[1]], wordsArray[indexesArray[2]], wordsArray[indexesArray[3]]]
}

const WordFromPictureBoard = () => {

    const themeArray = useSelector(state => state.theme.theme.array);
    const currentWord = useSelector(state => state.initialShufflesSlice.currentWord);

    console.log(currentWord);

    let wordsArray = useMemo(() => shuffleArray(themeArray), [themeArray])
    const dispatch = useDispatch()

    let query = wordsArray.length ? wordsArray[i].translate : { translate: null }
    let arrayToShow = useMemo(() => wordsArray.length ? generateArray(i, wordsArray) : tmpArray, [themeArray, i])


    const [currentWordsArray, setCurrentWordsArray] = useState(wordsArray);
    useEffect(() => {
        setCurrentWordsArray(wordsArray);
    }, [wordsArray]);



    useEffect(() => {
        dispatch(breakStreak())
        dispatch(clearErrors())

    }, [])


    const toggleChoice = (e) => {
        const wrapper = document.querySelector('.btn__wrapper')
        const nextBtn = document.querySelector('.next-btn')
        wrapper.classList.remove('selected')
        nextBtn.classList.remove('selected')
        console.log(wrapper.classList.contains('none'));
        if (e.target.tagName !== 'LI' && e.target.tagName !== 'BUTTON') return
        let cards = document.querySelectorAll('.choice')
        for (let el of cards)
            el.classList.remove('selected')
        wrapper.classList.add('none')
        if (e.target.tagName !== 'DIV' && e.target.tagName !== 'BUTTON')
            e.target.classList.add('selected')
        if (e.target.tagName === 'BUTTON')
            btn.current.classList.add('none')
        dispatch(updateCurrentWord(e.target.innerHTML))

        console.log('current:', wordsArray[i]);
    }

    const ref2 = useRef()
    let tween1 = KUTE.to(ref2.current, { translateX: -10 }, { duration: 30 });
    let tween2 = KUTE.to(ref2.current, { translateX: 0 }, { duration: 30 });
    let tween3 = KUTE.to(ref2.current, { translateX: 10 }, { duration: 30 });
    let tween4 = KUTE.to(ref2.current, { translateX: 0 }, { duration: 30 });
    tween1.chain(tween2)
    tween2.chain(tween3)
    tween3.chain(tween4)

    const ref3 = useRef()
    var tween5 = KUTE.fromTo(ref3.current, { translate3d: [0, 250, 0] }, { translate3d: [0, 0, 0] }, { duration: 200 });

    const btn = useRef()
    const checkRight = () => {
        if (!currentWord.length) return
        if (wordsArray[i].translate === currentWord) {
            console.log('true');
            btn.current.classList.remove('none')
            tween5.start()
            dispatch(addStreak())
            i++
        }
        else {
            tween1.start()
            dispatch(addError())
            dispatch(breakStreak())
        }
    }

    const levelEnd = () => {
        console.log(wordsArray.length);
        if (wordsArray.length - 1)
            if (i === wordsArray.length - 1) {
                i = 0;
                return true
            } else return false

    }
    console.log(arrayToShow);
    return (
        levelEnd() ? <LevelComplete /> :
            currentWordsArray.length > 0 ? (
                <div ref={ref2} className="game-container">
                    <section className="wfp-board">
                        <div className="wpf__image">
                            <GifSearch query={query} />
                        </div>
                        {wordsArray.length > 0 ? (
                            <ul onClick={toggleChoice} className="wpf__choice">
                                <li className="choice">{arrayToShow[0]?.translate}</li>
                                <li className="choice">{arrayToShow[1]?.translate}</li>
                                <li className="choice">{arrayToShow[2]?.translate}</li>
                                <li className="choice">{arrayToShow[3]?.translate}</li>
                                <li ref={ref3} className="next-btn">
                                    <div ref={btn} className="btn__wrapper none">
                                        <div className="wrapper__text">Верно!</div>
                                        <button className="mainbtn special-btn">Далее</button>
                                    </div>

                                </li>
                            </ul>
                        ) : (
                            <p>Loading...</p>
                        )}
                        <button onClick={checkRight} className="mainbtn">Проверить</button>
                    </section>
                </div>
            ) : (
                <p>Loading...</p>
            )
    );

}

export default WordFromPictureBoard;