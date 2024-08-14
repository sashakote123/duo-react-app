
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { firstShuffle, shuffleArray } from '../helpers/methods';

// Thunk для инициализации initialShufflesSlice


const initialShufflesSlice = createSlice({
    name: 'initialShuffles',
    initialState: {
        currentChoice: [],
        currentWord: [],
        interval: null,
        leftQueue: [],
        rightQueue: [],
    },
    reducers: {

        addChoice(state, action) {
            //state.currentChoice = [...state.currentChoice, action.payload]
            if (state.currentChoice.length === 2) state.currentChoice.length = 0
            state.currentChoice.push(action.payload)
        },
        updateCurrentWord(state, action) {
            state.currentWord = action.payload
        },
        addInterval(state, action) {
            state.interval = action.payload
        },
        addLeft(state, action) {
            state.leftQueue = action.payload
        },
        addRight(state, action) {
            state.rightQueue = action.payload
        },
        removeLeft(state) {
            state.leftQueue.shift()
            state.leftQueue.push({ id: Date.now() + Math.random(), word: null, translate: null })
        },
        removeRight(state) {
            state.rightQueue.shift()
            state.rightQueue.push({ id: Date.now() + Math.random(), word: null, translate: null })
        }
    },

});

export const { addChoice, addLeft, addRight, removeLeft, removeRight, addInterval, updateCurrentWord } = initialShufflesSlice.actions
export default initialShufflesSlice.reducer;