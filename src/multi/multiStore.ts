import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { textSlice } from "./reducers/textReducer";
import { topBgSlice } from "./reducers/bgReducer";

const reducers = {
  textReducer: textSlice.reducer,
  topBgReducer: topBgSlice.reducer,
};

export const multiStore = configureStore({
  reducer: reducers,
});

// To get the type when using states in
const multiReducers = combineReducers(reducers);
export type MultiStateType = ReturnType<typeof multiReducers>;

export const multiStoreActions = {
  ...textSlice.actions,
  ...topBgSlice.actions,
};
