import { all } from "redux-saga/effects";

import exampleSaga from "./example/sagas";

export default function* rootSaga(): any {
  return yield all([exampleSaga]);
}
