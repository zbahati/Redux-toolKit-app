import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/carts/cartSlice';
import modalReducer from '../features/modal/modalSlice';


const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  }
})


export default store;