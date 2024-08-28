import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  searchQuery: "",
  showAddCardBox: false,
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
    setShowAddCardBox: (state, action) => {
      state.showAddCardBox = action.payload;
    }
  },
});

export const { setAddCard, setSearchQuery, setShowAddCardBox } = cardSlice.actions;

const store = configureStore({
  reducer: cardSlice.reducer,
});

export default store;
