import { AppActionTypes } from "../actions/app.actions";
import { SIGN_IN } from "../actions/app.actions";

export type appState = {
  // login info
  signedIn: boolean;
  address: string;
  reducedAddress: string;

  // drips owned
  drips: {
    collection: string;
    id: number;
    img: string;
  }[];

  // nfts
  nfts: {
    collection: string;
    list: { img: string; title: string; id: number }[];
  }[];
};

const appStateReducer = (
  state: appState = {
    signedIn: false,
    address: "",
    reducedAddress: "",

    //
    drips: [],

    //
    nfts: [],
  },
  action: AppActionTypes
): appState => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,

        signedIn: action.payload.signedIn,
        address: action.payload.address,
        reducedAddress:
          action.payload.address.slice(0, 6) + "..." + action.payload.address.slice(-4),
      };
    default:
      return {
        ...state,
      };
  }
};

export { appStateReducer };
