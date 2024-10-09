import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice/index'
import adminProductsSlice from './admin/products-slice';

console.log("done");


const store = configureStore({
    reducer : {
        auth: authReducer,
        adminProducts : adminProductsSlice
    }
})

export default store;