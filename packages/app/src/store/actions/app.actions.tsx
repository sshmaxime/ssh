import { IAppState } from "../reducers/index";
import { sdk } from "../../sdk";

/////////////
// SIGN_IN //
/////////////
export const SIGN_IN = "SIGN_IN";
export interface ActionInit {
  type: typeof SIGN_IN;
  payload: {
    signedIn: boolean;
    address: string;
  };
}

export const signIn = () => {
  const toDispatch = (payload: ActionInit["payload"]): ActionInit => {
    return {
      type: SIGN_IN,
      payload: payload,
    };
  };

  return async (dispatch: any, getState: () => IAppState) => {
    try {
      await sdk.connect();
      const { address } = sdk.getInfo();
      console.log(address);

      return dispatch(toDispatch({ signedIn: true, address: address }));
    } catch (e) {}
  };
};

export type AppActionTypes = ActionInit;
