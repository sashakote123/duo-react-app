import { createSlice } from "@reduxjs/toolkit";


const cardWordSlice = createSlice({
    name: 'cardWord',
    initialState: {
        
        word: null,
    },
    reducers: {
        updateWord(state, action) {
            state.word = action.payload
        },

    }
})

export const { updateWord } = cardWordSlice.actions
export default cardWordSlice.reducer;