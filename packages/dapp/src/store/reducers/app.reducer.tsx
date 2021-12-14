import { AppActionTypes } from "../actions/app.actions";

import { SIGN_IN } from "../actions/app.actions";

export type appState = {
  signedIn: boolean;
  address: string;
};

const appStateReducer = (
  state: appState = {
    signedIn: false,
    address: "",
  },
  action: AppActionTypes
): appState => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,

        signedIn: action.payload.signedIn,
        address: action.payload.address,
      };
    default:
      return {
        ...state,
      };
  }
};

export { appStateReducer };
