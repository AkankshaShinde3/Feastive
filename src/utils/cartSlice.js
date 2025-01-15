import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalAmount: 0,
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.totalAmount += action.payload.card.info.price / 100;
        },
        removeItem: (state, action) => {
            state.items.pop();
            state.totalAmount -= action.payload.card.info.price / 100;
        },
        clearCart: (state) => {
            state.items.length = 0;
            state.totalAmount = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;