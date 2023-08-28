// remove the counter action creators imports
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { count: 0 };

// refactor to use the createSlice method
// export const counterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { count: ++state.count };
//     case DECREMENT_COUNTER:
//       return { count: --state.count };

//     case RESET_COUNTER:
//       return { count: 0 };
//     default:
//       return state;
//   }
// };

const counterSlice = createSlice({
  name:'counter',
  initialState:INITIAL_STATE,
  reducers:{
    //increment counter
    INCREMENT_COUNTER:(state,action)=>{
      ++state.count
    },
    DECREMENT_COUNTER:(state,action)=>{
      --state.count
    },
    RESET_COUNTER:(state,action)=>{
      state.count = 0;
    }    
  }
})

// export the counter reducer function and action creators here
export const counterAction = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
export const counterSelector = (state)=>state.counterReducer;
