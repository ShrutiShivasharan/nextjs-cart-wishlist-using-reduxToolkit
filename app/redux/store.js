import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../redux/slices/cartSlice';
import WishlistReducer from '../redux/slices/wishlistSlice';

export const store = configureStore({
    reducer: {
        cart : CartReducer,
        wishlist: WishlistReducer,
    }
})