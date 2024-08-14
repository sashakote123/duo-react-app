
import { useDispatch, useSelector } from "react-redux";
import LevelComplete from "../../common/LevelComplete";
import FindPareGameBoard from "./FindPareGameBoard";
import FindPareGameHeader from "./FindPareGameHeader";
import LevelFailed from "../../common/LevelFailed";
import { useParams } from "react-router";
import { themesList } from "../../../lists/themesList";
import { changeTheme } from "../../../store/currentThemeSlice";
import {  shuffleArray } from "../../../helpers/methods";
import { useEffect } from "react";
import { addFromQueueWords, replaceWord, updateState } from "../../../store/wordSlice";
import { addFromQueueTranslates, replaceTranslate, updateTranslates } from "../../../store/translateSlice";
import { addStreak, breakStreak } from "../../../store/streakSlice";
import { addLeft, addRight, removeLeft, removeRight } from "../../../store/initialShufflesSlice";
import { addError, clearErrors } from "../../../store/accuracySlice";



let i = 0
let arr = []
let arr2 = []


const FindPareGame = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const obj = themesList.find(item => item.theme === id)
    const words = useSelector(state => state.words.words);
    const timer = useSelector(state => state.timer.timer);
    const array = useSelector(state => state.initialShufflesSlice.currentChoice);
    const themeArray = useSelector(state => state.theme.theme.array);
    const wordArray = themeArray
    let intervalId = null;

    const queque1 = useSelector(state => state.initialShufflesSlice.leftQueue);
    const queque2 = useSelector(state => state.initialShufflesSlice.rightQueue);

    let items = document.querySelectorAll('.selected');

    useEffect(() => {

        dispatch(changeTheme(obj))

    }, [dispatch, obj])



    useEffect(() => {
        let shuffledArray = shuffleArray(themeArray)
        dispatch(breakStreak())
        dispatch(clearErrors())

        dispatch(updateState(shuffleArray(shuffledArray.slice(0, 5))))
        dispatch(updateTranslates(shuffleArray(shuffledArray.slice(0, 5))))
        let tmpArray = shuffledArray.slice(5)
        for (let i = 0; i < 1; i++)
            tmpArray = tmpArray.concat(shuffledArray)



        dispatch(addLeft(shuffledArray.slice(5)));
        dispatch(addRight(shuffledArray.slice(5)));



    }, [dispatch, themeArray])


    function startInterval() {
        if (!intervalId) {  
            intervalId = setInterval(() => {
                for (let item of items) {
                    item.classList.remove('true');

                }

                dispatch(addFromQueueTranslates(arr));
                dispatch(addFromQueueWords(arr2));


                console.log(arr, arr2);
                arr = [];
                arr2 = [];
                i = 0;
            }, 3000);
        }
    }

    function stopInterval() {
        if (intervalId) { 
            clearInterval(intervalId);
            intervalId = null; 
        }
    }

    useEffect(() => {
        let wordToTranslate = wordArray.find(word => {
            return word.word === array[0] && word.translate === array[1]
        })

        let translateToWord = wordArray.find(word => {
            return word.word === array[1] && word.translate === array[0]
        })



        if (wordToTranslate || translateToWord) {
            dispatch(addStreak())

            for (let item of items) {
                item.classList.add('true')
                item.classList.remove('selected');
            }


            arr.push(queque1.at(i))
            arr2.push(queque2.at(i))
            dispatch(removeLeft())
            dispatch(removeRight())
            i++
            console.log(arr, arr2);
            if (wordToTranslate)
                setTimeout(() => {
                    dispatch(replaceTranslate(wordToTranslate))
                    dispatch(replaceWord(wordToTranslate))

                }, 1500);

            if (translateToWord)
                setTimeout(() => {
                    dispatch(replaceTranslate(translateToWord))
                    dispatch(replaceWord(translateToWord))

                }, 1500);

            startInterval()
            setTimeout(() => {
                stopInterval()
            }, 5000);

        }

        if (!wordToTranslate && !translateToWord && array.length === 2) {
            dispatch(breakStreak())
            dispatch(addError())
            for (let item of items) {
                item.classList.add('false')

            }
            setTimeout(() => {
                for (let item of items) {
                    item.classList.remove('selected')
                    item.classList.remove('false')
                }
            }, 1500)
        }

    }, [array])



    useEffect(() => {

    }, [])


    const emptyArray = (arr) => {

        if (!arr.length) return false
        let counter = 0;
        arr.forEach(el => {
            if (el.word === null) counter++
        })
        if (counter === arr.length) {
            return true
        }
        else return false
    }


    const timeEnd = (timer) => {
        if (timer.minutes === 0 && timer.seconds === 0) return true
        else return false
    }

    return (
        themeArray && (
            <>
                {timeEnd(timer) ?
                    <LevelFailed text={'Время вышло!'} /> : emptyArray(words) ? (
                        <LevelComplete />
                    ) : (
                        <div className="container">
                            <FindPareGameHeader />
                            <FindPareGameBoard />
                        </div>
                    )}
            </>
        )



    )
}

export default FindPareGame;