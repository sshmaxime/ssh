import { AppActionTypes, SIGN_IN, GET_ASSETS_OWNED } from "../actions/app.actions";
import { NFTs, NFTsByCollection } from "@sshlabs/typings";

const defaultAuthState = { signedIn: false, address: "", reducedAddress: "" };
type authState = typeof defaultAuthState;

const defaultWalletState: { nfts: NFTsByCollection; drips: NFTs } = { nfts: [], drips: [] };
type walletState = typeof defaultWalletState;

export type appState = {
  auth: authState;
  wallet: walletState;
};

const appStateReducer = (
  state: appState = {
    auth: defaultAuthState,
    wallet: defaultWalletState,
  },
  action: AppActionTypes
): appState => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        auth: {
          ...state.auth,
          signedIn: action.payload.signedIn,
          address: action.payload.address,
          reducedAddress:
            action.payload.address.slice(0, 6) + "..." + action.payload.address.slice(-4),
        },
      };

    case GET_ASSETS_OWNED:
      console.log(action.payload);
      return {
        ...state,
        wallet: {
          ...state.wallet,
          drips: action.payload.drips,
          nfts: action.payload.nfts,
        },
      };

    default:
      return {
        ...state,
      };
  }
};

export { appStateReducer };
