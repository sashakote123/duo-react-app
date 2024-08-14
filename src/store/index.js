import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./wordSlice";
import translateSlice from "./translateSlice";
import accuracySlice from "./accuracySlice";
import streakSlice from "./streakSlice";
import timerSlice from "./timerSlice";
import currentThemeSlice from "./currentThemeSlice";
import initialShufflesSlice from "./initialShufflesSlice";
import pointsScoreSlice from "./pointsScoreSlice";
import cardWordSlice from "./cardWordSlice";


export default configureStore({
    reducer: {
        word: cardWordSlice,
        words: wordSlice,
        translate: translateSlice,
        initialShufflesSlice: initialShufflesSlice,
        accuracy: accuracySlice,
        streak: streakSlice,
        timer: timerSlice,
        theme: currentThemeSlice,
        scores: pointsScoreSlice,


        // другие редьюсеры
    },

})