import { Reducer } from "redux";
import { produce } from "immer";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGIN_REQUEST,
  USER_EDIT_REQUEST,
  USER_EDIT_FAILURE,
  USER_EDIT_SUCCESS,
} from "./types";
import { api } from "../../../services/api";

type AuthData = {
  isLoggedIn: boolean;
  token: string;
  user: object;
  isLoading: boolean;
};

const INITIAL_STATE: AuthData = {
  isLoggedIn: false,
  token: "",
  user: {},
  isLoading: false,
};

export const auth: Reducer = (state = INITIAL_STATE, action) => {
  return produce(state, (draft: AuthData) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        const data = action.payload;
        draft.token = data.token;
        draft.user = data.user;
        draft.isLoading = false;
        draft.isLoggedIn = true;
        break;
      case LOGIN_REQUEST:
        draft.isLoading = true;
        break;
      case LOGIN_FAILURE:
        delete api.defaults.headers.common.Authorization;
        return INITIAL_STATE;
      case LOGOUT:
        delete api.defaults.headers.common.Authorization;
        return INITIAL_STATE;
      case USER_EDIT_REQUEST:
        draft.isLoading = true;
        break;
      case USER_EDIT_FAILURE:
        draft.isLoading = false;
        return draft;
      case USER_EDIT_SUCCESS:
        const editData = action.payload;
        draft.user = editData;
        draft.isLoading = false;
        break;
      default:
        return draft;
    }
  });
};
