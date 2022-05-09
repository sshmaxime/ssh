import { appState, appStateReducer } from "./app.reducer";

export interface IAppState {
  appState: appState;
}

export const reducers = {
  appState: appStateReducer,
};
