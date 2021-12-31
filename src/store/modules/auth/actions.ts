import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGOUT } from "./types";

export function loginSuccess(payload: object) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function loginRequest(payload: object) {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
}

export function loginError() {
  return {
    type: LOGIN_FAILURE,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
