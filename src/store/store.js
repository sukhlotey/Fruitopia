import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";
import counterSlice from "./slices/counterSlice";

const  store = configureStore({
    reducer:{
        data:apiSlice,
        counter:counterSlice,
    }
})

export default store;