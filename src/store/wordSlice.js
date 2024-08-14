import { createSlice } from "@reduxjs/toolkit";



const wordSlice = createSlice({
    name: 'words',
    initialState: {
        //words: rightShuffle,
        words: []
    },
    reducers: {
        updateState(state, action) {
            state.words = []
            state.words = action.payload
        },
        replaceWord(state, action) {
            const elementToReplace = action.payload;
            const index = state.words.findIndex(item => item.id === elementToReplace.id);
            if (index !== -1) {
                state.words[index] = { id: Date.now() + Math.random(), word: null, translate: null };
            }
        },
        addFromQueueWords(state, action) {
            let arr = []
            if (action.payload) {
                for (let el of state.words) {
                    if (el.word === null) {
                        let elem = action.payload.shift()
                        if (!elem) elem = { id: Date.now() + Math.random(), word: null, translate: null };
                        arr.push(elem)
                    }

                    else arr.push(el)
                }
                state.words = arr.slice(0)
            }

        }
    }
})

export const { updateState, replaceWord, addFromQueueWords } = wordSlice.actions
export default wordSlice.reducer;