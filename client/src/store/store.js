import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice/index'

console.log("done");


const store = configureStore({
    reducer : {
        auth: authReducer
    }
})

export default store;