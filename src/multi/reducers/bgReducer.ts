import { PayloadAction, createSlice } from "@reduxjs/toolkit";

/**
 * Reducer State
 */
const initialState = { topBg: "white" };

/**
 * Slice
 */
export const topBgSlice = createSlice({
  name: "multi_bg",
  initialState,
  reducers: {
    setTopRootBgColor(state, action: PayloadAction<string>) {
      state.topBg = action.payload;
    },
  },
});
