import { createSlice } from "@reduxjs/toolkit";

// slice tra ve action + reducer
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increaseCount: (state, action) => {
      return (state = state + 1);
    },
    decreaseCount: (state, action) => {
      return (state = state - 1);
    },
  },
});

const { actions, reducer } = counterSlice;
export const { increaseCount, decreaseCount } = actions; //cấu trúc destructoring
export default reducer;
