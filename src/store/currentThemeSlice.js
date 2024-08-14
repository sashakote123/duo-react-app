import { createSlice } from "@reduxjs/toolkit";


const currentThemeSlice = createSlice({
    name: 'current',
    initialState: {
        theme: {
            theme: null,
            description: null,
            array: []
        },
    },
    reducers: {
        changeTheme(state, action) {
            state.theme = action.payload
        },
    }
})

export const { changeTheme } = currentThemeSlice.actions
export default currentThemeSlice.reducer;