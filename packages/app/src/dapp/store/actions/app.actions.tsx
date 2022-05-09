import { RootState } from "..";
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

  //
  return async (dispatch: any, getState: () => RootState) => {
    try {
      await sdk.connect();
      const { address } = sdk.getInfo();

      return dispatch(toDispatch({ signedIn: true, address: address }));
    } catch (e) {
      return dispatch(toDispatch({ signedIn: false, address: "" }));
    }
  };
};

export type AppActionTypes = ActionInit;
