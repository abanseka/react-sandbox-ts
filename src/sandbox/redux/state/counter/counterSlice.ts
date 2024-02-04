import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state: { value: number }): void => {
      state.value += 1;
    },
    decrement: (state: { value: number }): void => {
      if (state.value <= 0) return;
      state.value -= 1;
    },
    incrementByAmount: (
      state: { value: number },
      action: PayloadAction<number>,
    ): void => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice;
