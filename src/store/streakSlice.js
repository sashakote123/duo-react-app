import { createSlice } from "@reduxjs/toolkit";


const streakSlice = createSlice({
    name: 'streak',
    initialState: {
        streak: 0,
    },
    reducers: {
        addStreak(state) {
            state.streak++;
        },
        breakStreak(state) {
            state.streak = 0;
        }
    }
})

export const { addStreak, breakStreak } = streakSlice.actions
export default streakSlice.reducer;