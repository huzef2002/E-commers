import { createSlice } from "@reduxjs/toolkit";

const CardSlise = createSlice({
    name: 'card',
    initialState: {
        card: [],
    },
    reducers: {
        addToCard: (state, action) => {
            // const axistingItem = state.card.find(
            //     (item) => item.CardData.id === action.payload
            // );
            // if (axistingItem) {
            //     state.card.map((item) => item.CardData.id === action.payload ? { ...item, qty: item.qty + 1 }:item)
            // }
            state.card.push(action.payload)
        },
        removeToCard: (state, action) => {
            state.card = state.card.filter((item) => item.CardData.id !== action.payload);
        },
    },
});

export const { addToCard, removeToCard } = CardSlise.actions;
export default CardSlise.reducer;