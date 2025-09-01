import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";

// const store will store a configureStore functions which take a objects as parameters 

const store = configureStore({
    reducer:{
        auth : authSlice,
    }
})

export default store; 