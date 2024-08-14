import { createSlice } from "@reduxjs/toolkit";


const accuracySlice = createSlice({
    name: 'accuracy',
    initialState: {
        errors: 0,
    },
    reducers: {
        addError(state) {
            state.errors++;
        },
        clearErrors(state) {
            state.errors = 0;
        }
    }
})

export const { addError, clearErrors } = accuracySlice.actions
export default accuracySlice.reducer;