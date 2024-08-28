import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  searchQuery: "",
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setAddCard: (state, action) => {
      state.cards = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setAddCard, setSearchQuery } = cardSlice.actions;

const store = configureStore({
  reducer: cardSlice.reducer,
});

export default store;
