import { createSlice } from "@reduxjs/toolkit";


const translateSlice = createSlice({
    name: 'translates',
    initialState: {
        //words: rightShuffle,
        translate: []
    },
    reducers: {
        updateTranslates(state, action) {
            state.translate = []
            state.translate = action.payload
        },
        replaceTranslate(state, action) {
            const elementToReplace = action.payload;
            const index = state.translate.findIndex(item => item.id === elementToReplace.id);
            if (index !== -1) {
                state.translate[index] = { id: Date.now() + Math.random(), word: null, translate: null };
            }
        },
        addFromQueueTranslates(state, action) {
            let arr = []
            console.log(action.payload);
            if (action.payload) {
                for (let el of state.translate) {
                    if (el.word === null) {
                        let elem = action.payload.shift()
                        if (!elem) elem = { id: Date.now() + Math.random(), word: null, translate: null };
                        arr.push(elem)
                    }

                    else arr.push(el)
                }
                state.translate = arr.slice()
            }

        }

    }
})

export const { updateTranslates, replaceTranslate, addFromQueueTranslates } = translateSlice.actions
export default translateSlice.reducer;