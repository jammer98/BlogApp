import { configureStore } from "@reduxjs/toolkit";

// const store will store a configureStore functions which take a objects as parameters 

const store = configureStore({
    reducer: authReducer
})

export default store;