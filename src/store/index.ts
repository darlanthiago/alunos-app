import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";

import { composeWithDevTools } from "redux-devtools-extension";

import rootReducers from "./modules/rootReducers";
import rootSaga from "./modules/rootSagas";
import persistedReducers from "./modules/persist";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducers(rootReducers),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export { store };
