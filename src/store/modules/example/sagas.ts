import { call, put, all, takeLatest } from "redux-saga/effects";

import { toast } from "react-toastify";

import { buttonClickSuccess, buttonClickError } from "./actions";
import { BOTAO_CLICADO_REQUEST } from "./types";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const request = () =>
  new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      const random = getRandomInt(2);
      if (random === 1) {
        reject();
        return;
      }
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    yield call(request);
    yield put(buttonClickSuccess());
    toast.success("SUCESSO");
  } catch (error) {
    yield put(buttonClickError());
    toast.error("ERRO");
  }
}

export default all([takeLatest(BOTAO_CLICADO_REQUEST, exampleRequest)]);
