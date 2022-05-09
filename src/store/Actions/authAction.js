import { LOGIN_SUCCESS, LOGOUT_REQUEST } from "./actionType";

export function saveLoginUserData(response) {
  return { type: LOGIN_SUCCESS, payload: response };
}

export function signOutRequest() {
  return {
    type: LOGOUT_REQUEST,
  };
}
