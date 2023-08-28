// remove the timer action creators imports
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const INITIAL_STATE = { isRunning: false, elapsedTime: 0 };

// refactor to use the createSlice method
// export const timerReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case START_TIMER:
//       return { ...state, isRunning: true };
//     case PAUSE_TIMER:
//       return { ...state, isRunning: false };

//     case RESET_TIMER:
//       return { isRunning: false, elapsedTime: 0 };
//     case INCREMENT_TIMER:
//       return { ...state, elapsedTime: ++state.elapsedTime };
//     default:
//       return state;
//   }
// };

const timerSlice = createSlice({
  name:'timer',
  initialState:INITIAL_STATE,
  reducers:{
    //start timer
    start:(state,action)=>{
      state.isRunning = true;
    },
    pause:(state,action)=>{
      state.isRunning = false;
    },
    reset:(state,action)=>{
      state.isRunning = false;
      state.elapsedTime = 0;
    },
    increment:(state,action)=>{
      ++state.elapsedTime
    }

  }
})

// export the timer reducer function and action creators here
export const timerActions = timerSlice.actions;
export const timerReducer = timerSlice.reducer;
export const timerSelector = (state)=>state.timerReducer;



