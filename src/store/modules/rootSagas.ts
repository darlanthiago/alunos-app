import { all } from "redux-saga/effects";

import exampleSaga from "./example/sagas";
import authSaga from "./auth/sagas";

export default function* rootSaga(): any {
  return yield all([exampleSaga, authSaga]);
}
