import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

// const store will store a configureStore functions which take a objects as parameters 

const store = configureStore({
    reducer:{
        auth: authReducer
    }
})

export default store; 