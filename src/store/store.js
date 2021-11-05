import { NavbarPage } from "../Components/NavbarPage/NavbarPage";

export const SIGNIN_CONFIRMED_ACTION = "[signin action] confirmed signin";
export const SIGNIN_FAILED_ACTION = "[signin action] failed signin";

export function signInAction(email) {
  return (dispatch) => {
    NavbarPage(email).then((response) => {
      console.log(response);
    });
  };
}

export function confirmedSignInAction(payload) {
  return {
    type: SIGNIN_CONFIRMED_ACTION,
    payload,
  };
}
