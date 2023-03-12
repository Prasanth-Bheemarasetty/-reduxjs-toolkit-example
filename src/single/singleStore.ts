import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

/**
 * Reducer State Type
 */
export interface SingleStateType {
  text: string;
  topBg: string;
}

/**
 * Reducer State
 */
const initialState: SingleStateType = { text: "", topBg: "white" };

/**
 * Slice
 */
const slice = createSlice({
  name: "single",
  initialState,
  reducers: {
    setText(state: SingleStateType, action: PayloadAction<string>) {
      state.text = action.payload;
    },
    setTopRootBgColor(state: SingleStateType, action: PayloadAction<string>) {
      state.topBg = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: slice.reducer,
  //   reducer: {
  //     textField: slice.reducer,
  //   },
});

export const singleStoreActions = slice.actions;
