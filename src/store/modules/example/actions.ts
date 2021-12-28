import {
  BOTAO_CLICADO_REQUEST,
  BOTAO_CLICADO_SUCCESS,
  BOTAO_CLICADO_FAILURE,
} from "./types";

export function buttonClickSuccess() {
  return {
    type: BOTAO_CLICADO_SUCCESS,
  };
}

export function buttonClickRequest() {
  return {
    type: BOTAO_CLICADO_REQUEST,
  };
}

export function buttonClickError() {
  return {
    type: BOTAO_CLICADO_FAILURE,
  };
}
