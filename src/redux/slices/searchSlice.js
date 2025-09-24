import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputText: "",
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setInputText: (state, action) => {
      state.inputText = action.payload;
    },
    applySearch: (state) => {
      state.search = state.inputText;
    },
    resetSearch: (state) => {
      state.inputText = "";
      state.search = "";
    },
  },
});

export const { setInputText, applySearch, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
