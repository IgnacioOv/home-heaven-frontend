import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducer';
import authReducer from '../reducers/authReducer';
const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer
    }
});



export default store;
