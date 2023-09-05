const { createSlice } = require("@reduxjs/toolkit");
const {startTimer, pauseTimer, resetTimer } = require("./timerReducer");

const INITIAL_STATE = { message: null };

// create alert slice to handle start, pause, timer actions below
const alertSlice = createSlice({
    name:'alert',
    initialState:INITIAL_STATE,
    reducers:{
        resetmessage:(state,action)=>{
            state.message=null;
        }
    },
    extraReducers:{
        [startTimer]:(state,action)=>{
            console.log('start');
            state.message="Timer is Started."
        },

        [pauseTimer]:(state,action)=>{
            console.log('pause');
            state.message = "Timer is Paused."
        },

        [resetTimer]:(state,action)=>{
            console.log("reset");
            state.message = "Timer set to 0."
        }
    }
})

// export the alert reducer function here
export const alertReducer = alertSlice.reducer;
export const {resetmessage} = alertSlice.actions;

// create and export alert selector function here
export const alertSelector = (state)=>state.alertReducer;

