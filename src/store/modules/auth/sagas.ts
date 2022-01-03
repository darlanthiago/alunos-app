import { call, put, all, takeLatest } from "redux-saga/effects";

import { toast } from "react-toastify";

import {
  loginError,
  loginSuccess,
  userEditFailure,
  userEditSuccess,
} from "./actions";
import { LOGIN_REQUEST, PERSIST, USER_EDIT_REQUEST } from "./types";
import { api } from "../../../services/api";
import { AxiosResponse } from "axios";
import { get } from "lodash";
import { history } from "../../../services/history";

type PayloadData = {
  email: string;
  password: string;
};

type Data = {
  payload: PayloadData;
  type: string;
};

function* handleLogin({ payload }: Data) {
  try {
    const response: AxiosResponse = yield call(api.post, "/tokens", payload);
    yield put(loginSuccess(response.data));

    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`;
    history.push("/");
    toast.success("Login feito com sucesso");
  } catch (error) {
    toast.error("Usuário ou senha inválidos!");
    yield put(loginError());
  }
}

function* userEditRequest({ payload }: { payload: any }) {
  const { name, email, password } = payload;

  try {
    const response: AxiosResponse = yield call(api.put, "/users", {
      nome: name,
      email: email,
      password: password || undefined,
    });

    yield put(userEditSuccess(response.data));
  } catch (error) {
    const status = get(error, "response.status", "");
    if (status === 401) {
      toast.error("Ops! Faça login novamente!");
      yield put(loginError());
      return history.push("/login");
    }

    yield put(userEditFailure());
  }
}

function persistor(data: any) {
  const token = get(data.payload, "auth.token", "");

  if (!token) return;

  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default all([
  takeLatest(LOGIN_REQUEST, handleLogin),
  takeLatest(PERSIST, persistor),
  takeLatest<any>(USER_EDIT_REQUEST, userEditRequest),
]);
