import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: { wishlistItems : []},
    reducers : {
        addToWishlist: (state, {payload})=> {
            if(!state.wishlistItems.find((item)=> item.id === payload.id)){
               state.wishlistItems.push(payload); 
            }
        },
        removeFromWishlist: (state, {payload}) => {
            state.wishlistItems = state.wishlistItems.filter((items) => items.id !== payload);
        },
    }
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;