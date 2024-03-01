import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../feactures/counter/counterSlice";
import shopReducer from "../feactures/shop/shopSlice";

export default configureStore ({
    reducer: {
        counterReducer,
        shopReducer,
    },

});