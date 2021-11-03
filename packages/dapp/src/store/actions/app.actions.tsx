import { IAppState } from "../reducers/index";
import { sdk } from "../../sdk";

//////////
// CONNECT //
//////////
export const CONNECT = "CONNECT";
export interface ActionInit {
  type: typeof CONNECT;
  payload: {
    connected: boolean;
    address: string;
  };
}

export const A_connect = () => {
  const toDispatch = (payload: {
    connected: boolean;
    address: string;
  }): ActionInit => {
    return {
      type: CONNECT,
      payload: payload,
    };
  };

  return async (dispatch: any, getState: () => IAppState) => {
    try {
      await sdk.connect();

      const { address } = sdk.getInfo();

      return dispatch(toDispatch({ connected: true, address: address }));
    } catch (e) {
      return dispatch(toDispatch({ connected: false, address: "" }));
    }
  };
};

export type AppActionTypes = ActionInit;
