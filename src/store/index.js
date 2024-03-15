import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feactures/counter/counterSlice";
import shopReducer from "../feactures/shop/shopSlice";
import cartReducer from "../feactures/shop/cartSlice";
import authReducer from "..//feactures/auth/authSlice";
import { shopApi } from "../services/shopService";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authService";

export default configureStore({
  reducer: {
    counterReducer,
    shopReducer,
    cartReducer,
    authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware).concat(authApi.middleware),
});

setupListeners(configureStore.dispatch);