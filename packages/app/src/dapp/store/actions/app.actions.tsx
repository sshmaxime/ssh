import { RootState } from "..";
import { sdk } from "../../sdk";
import { AssetsOwned } from "@sshlabs/typings";
import axios from "axios";

export const SIGN_IN = "SIGN_IN";
export interface ActionSignIn {
  type: typeof SIGN_IN;
  payload: {
    signedIn: boolean;
    address: string;
  };
}

export const GET_ASSETS_OWNED = "GET_ASSETS_OWNED";
export interface ActionGetAssetOwned {
  type: typeof GET_ASSETS_OWNED;
  payload: AssetsOwned;
}
export const getAssetsOwned = (dropId: number, address: string) => {
  const toDispatch = (payload: ActionGetAssetOwned["payload"]): ActionGetAssetOwned => {
    return {
      type: GET_ASSETS_OWNED,
      payload: payload,
    };
  };

  return async (dispatch: any, getState: () => RootState) => {
    try {
      const result = (await axios.get(`http://localhost:3001/drop/${dropId}/${address}`))
        .data as AssetsOwned;

      return dispatch(toDispatch(result));
    } catch (e) {}
  };
};

export const signIn = () => {
  const toDispatch = (payload: ActionSignIn["payload"]): ActionSignIn => {
    return {
      type: SIGN_IN,
      payload: payload,
    };
  };

  return async (dispatch: any, getState: () => RootState) => {
    try {
      await sdk.connect();
      const { address } = sdk.getInfo();

      return dispatch(toDispatch({ signedIn: true, address: address }));
    } catch (e) {}
  };
};

export type AppActionTypes = ActionSignIn | ActionGetAssetOwned;
