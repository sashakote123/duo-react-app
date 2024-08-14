import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef } from "react";
import { updateWord } from "../../../store/cardWordSlice";
import { addError, clearErrors } from "../../../store/accuracySlice";
import LevelComplete from "../../common/LevelComplete";
import LevelFailed from "../../common/LevelFailed";
import { shuffleArray } from "../../../helpers/methods";
import KUTE from 'kute.js';


let i = 0

const CardGameBoard = () => {


    const showWordBtn = useRef()
    const dispatch = useDispatch()
    const themeArray = useSelector(state => state.theme.theme.array);
    let wordsArray = useMemo(() => shuffleArray(themeArray), [themeArray])
    if (wordsArray.length === themeArray.length)
        wordsArray.push({ id: Date.now() + Math.random(), word: null, translate: null })
    console.log(wordsArray);
    const word = useSelector(state => state.word.word);

    let curentWord = wordsArray.length ? wordsArray[i].word : null
    //let curentWord = wordsArray[i].word

    useEffect(() => {
        dispatch(clearErrors())
    }, [])
    useEffect(() => {

        dispatch(updateWord(curentWord))
    }, [curentWord, dispatch])


    //useEffect(() => i = 0, [])
    let elem = document.querySelector('.board__word')
    let board = document.querySelector('.game__board')

    let tween1 = KUTE.fromTo(elem, { rotateX: 0 }, { rotateX: 200 }, { duration: 200 });
    let tween2 = KUTE.fromTo(elem, { rotateX: 200 }, { rotateX: 0 }, { duration: 200 });

    let animRight = KUTE.fromTo(board, { translateX: 0 }, { translateX: -1500 }, { duration: 200 });
    let anim1 = KUTE.fromTo(board, { translateX: 1500 }, { translateX: 0 }, { duration: 200 });


    let animFalse = KUTE.fromTo(board, { translateX: 0 }, { translateX: 1500 }, { duration: 200 });
    let anim2 = KUTE.fromTo(board, { translateX: -1500 }, { translateX: 0 }, { duration: 200 });

    animRight.chain(anim1)
    animFalse.chain(anim2)

    tween1.chain(tween2);
    const showWord = (e) => {
        if (!showWordBtn.current.classList.contains('actived')) {
            showWordBtn.current.classList.add('actived')
            tween1.start()
            setTimeout(() => dispatch(updateWord(wordsArray[i].translate)), 150)
        }


    }

    const trueHandler = () => {
        i++
        showWordBtn.current.classList.remove('actived')
        animRight.start()
        setTimeout(() => dispatch(updateWord(wordsArray[i].word)), 150)
    }

    const falseHandler = () => {
        dispatch(addError())

        showWordBtn.current.classList.remove('actived')
        animFalse.start()
        setTimeout(() => {
            i++
            dispatch(updateWord(wordsArray[i].word))
        }, 150)

    }
    const errors = useSelector(state => state.accuracy.errors)
    const levelEnd = () => {
        console.log(wordsArray.length);
        if (wordsArray.length - 1)
            if (i === wordsArray.length - 1) {
                i = 0;
                return true
            } else return false

    }

    const levelEndWithErrors = () => {
        if (errors / (wordsArray.length - 1) >= 0.5 && i === wordsArray.length - 1) {
            i = 0;
            return true
        } else return false
    }

    console.log(i);
    return (
        levelEndWithErrors() ? <LevelFailed text={'Много ошибок!'} /> : levelEnd() ? (< LevelComplete />) :
            <section className="game__board">
                <div className="board__word">
                    <div className="word__text">
                        {word}
                    </div>
                </div>
                <div className="board__buttons">
                    <div ref={showWordBtn} onClick={showWord} className="show-btn">Показать слово</div>
                    <div onClick={falseHandler} className="red-btn">Не знаю</div>
                    <div onClick={trueHandler} className="green-btn">Знаю</div>

                </div>
            </section>
    );
}

export default CardGameBoard;