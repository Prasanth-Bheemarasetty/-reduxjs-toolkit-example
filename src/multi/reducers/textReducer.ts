import { PayloadAction, createSlice } from "@reduxjs/toolkit";

/**
 * Reducer State
 */
const initialState = { text: "" };

/**
 * Slice
 */
export const textSlice = createSlice({
  name: "multi_text",
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});
