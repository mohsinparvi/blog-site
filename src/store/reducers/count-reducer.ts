import { createSlice } from "@reduxjs/toolkit";

const countInitialState = {
  number: 0,
};
const countSlice = createSlice({
  name: "count",
  initialState: countInitialState,
  reducers: {
    setCount(state, action) {
      state.number = action.payload;
    },
  },
});

const { setCount } = countSlice.actions;
const countReducer = countSlice.reducer;

export { setCount, countReducer };
