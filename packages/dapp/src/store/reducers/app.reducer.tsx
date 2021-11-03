import { AppActionTypes } from "../actions/app.actions";

import { CONNECT } from "../actions/app.actions";

export type appState = {
  connected: boolean;
  address: string;
};

const appStateReducer = (
  state: appState = {
    connected: false,
    address: "",
  },
  action: AppActionTypes
): appState => {
  switch (action.type) {
    case CONNECT:
      return {
        ...state,

        connected: action.payload.connected,
        address: action.payload.address,
      };
    default:
      return {
        ...state,
      };
  }
};

export { appStateReducer };
