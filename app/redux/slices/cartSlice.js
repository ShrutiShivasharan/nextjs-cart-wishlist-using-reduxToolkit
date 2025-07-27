import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { cartItems : []},
    reducers : {
        addToCart: (state, {payload})=> {
            const item = state.cartItems.find((items) => items.id === payload.id);
            item ? item.quantity++ : state.cartItems.push({...payload, quantity:1});
        },
        removeFromCart: (state, {payload}) => {
            state.cartItems = state.cartItems.filter((items) => items.id !== payload);
        },
        updateQuntity: (state, {payload}) => {
            const item = state.cartItems.find((items) => items.id === payload.id);
            if(item) item.quantity = payload.quantity;
        },
        clearCart : (state) => {
            state.cartItems = [];
        }
    }
});

export const { addToCart, removeFromCart, updateQuntity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;