import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice/index'
import AdminProductsSlice from './admin/products-slice/index';

console.log("done");


const store = configureStore({
    reducer : {
        auth: authReducer,
        adminProducts: AdminProductsSlice
    }
})

export default store;