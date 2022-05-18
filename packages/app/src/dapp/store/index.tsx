import { configureStore } from "@reduxjs/toolkit";
import { IAppState, reducers } from "./reducers/index";
import { combineReducers } from "redux";
import { dropApi } from "./services";

export const store = configureStore({
  reducer: combineReducers({
    [dropApi.reducerPath]: dropApi.reducer,

    ...reducers,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dropApi.middleware),
});

export type RootState = IAppState;
export type AppDispatch = typeof store.dispatch;
