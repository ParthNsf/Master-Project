import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice/index'
import adminProductsSlice from './admin/products-slice';
import shopProductsSlice from './shop/products-slice';


console.log("done");


const store = configureStore({
    reducer : {
        auth: authReducer,
        adminProducts : adminProductsSlice,
        shopProducts : shopProductsSlice  // add shopProducts slice here if needed  // replace 'shopProducts' with the actual slice name if applicable.
    }
})

export default store;