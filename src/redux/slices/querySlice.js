import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
};

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
      // console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuery } = querySlice.actions;

export default querySlice.reducer;
