import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: String(process.env.REACT_APP_STORAGE_KEY),
  storage,
  whitelist: ["example"],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (reducers: any) => {
  const persistedReducer = persistReducer(persistConfig, reducers);

  return persistedReducer;
};
