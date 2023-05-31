// import { combineReducers } from "redux";
// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from "../reducers/userReducer";

// export const rootReducer = configureStore({
//     user: userReducer,
// })

// export default rootReducer;



import {  combineReducers } from 'redux';
import userReducer from "../reducers/userReducer";
const reducer = combineReducers({
    // here we will be adding reducers
    user: userReducer
  })


export default reducer;