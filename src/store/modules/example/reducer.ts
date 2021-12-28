import { Reducer } from "redux";
import { produce } from "immer";
import {
  BOTAO_CLICADO_FAILURE,
  BOTAO_CLICADO_REQUEST,
  BOTAO_CLICADO_SUCCESS,
} from "./types";

export type State = {
  buttonClick: boolean;
};

const INITIAL_STATE: State = {
  buttonClick: false,
};

export const example: Reducer = (state = INITIAL_STATE, action) => {
  return produce(state, (draft: State) => {
    switch (action.type) {
      case BOTAO_CLICADO_SUCCESS:
        console.log("SUCESSO");
        draft.buttonClick = !draft.buttonClick;
        break;
      case BOTAO_CLICADO_FAILURE:
        console.log("ERRO");
        return draft;
      case BOTAO_CLICADO_REQUEST:
        console.log("Estou fazendo a requisição");
        return draft;
      default:
        return draft;
    }
  });
};
