import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGOUT,
  USER_EDIT_REQUEST,
  USER_EDIT_SUCCESS,
} from "./types";

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

export function userEditRequest(payload: object) {
  return {
    type: USER_EDIT_REQUEST,
    payload,
  };
}

export function userEditSuccess(payload: object) {
  return {
    type: USER_EDIT_SUCCESS,
    payload,
  };
}

export function userEditFailure() {
  return {
    type: USER_EDIT_SUCCESS,
  };
}
