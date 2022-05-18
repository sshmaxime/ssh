import { configureStore } from "@reduxjs/toolkit";
import { IAppState, reducers } from "./reducers/index";
import { combineReducers } from "redux";

export const store = configureStore({
  reducer: combineReducers({
    ...reducers,
  }),
});

export type RootState = IAppState;
export type AppDispatch = typeof store.dispatch;
