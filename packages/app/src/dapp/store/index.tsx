import { configureStore } from "@reduxjs/toolkit";
import { IAppState, reducers } from "./reducers/index";
import { dropApi } from "./services/drop";
import { combineReducers } from "redux";

export const store = configureStore({
  reducer: combineReducers({
    [dropApi.reducerPath]: dropApi.reducer,
    ...reducers,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dropApi.middleware),
});

export type RootState = IAppState;
export type AppDispatch = typeof store.dispatch;
