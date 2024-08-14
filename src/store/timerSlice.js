import { createSlice } from "@reduxjs/toolkit";


const timerSlice = createSlice({
    name: 'translates',
    initialState: {
        timer: {
            minutes: 2,
            seconds: 59,
        }
    },
    reducers: {
        updateTimer(state) {
            if ((state.timer.minutes === -1 && state.timer.seconds === 59) ||
                (state.timer.minutes === 0 && state.timer.seconds === 0)) {
                state.timer.minutes = 0;
                state.timer.seconds = 0;
                return 
            }
            state.timer.seconds--;
            if (state.timer.seconds === 0) {
                state.timer.minutes--
                state.timer.seconds = 59
            }

        },
    }
})

export const { updateTimer } = timerSlice.actions
export default timerSlice.reducer;