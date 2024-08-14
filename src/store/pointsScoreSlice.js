import { createSlice } from "@reduxjs/toolkit";


const pointsScore = createSlice({
    name: 'accuracy',
    initialState: {
        points: parseInt(localStorage.getItem('points'), 10) || 0,
    },
    reducers: {
        addScore(state) {
            state.points += 1
            localStorage.setItem('points', state.points)
            
        },
    }
})

export const { addScore } = pointsScore.actions
export default pointsScore.reducer;