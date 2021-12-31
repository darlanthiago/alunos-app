import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: String(process.env.REACT_APP_STORAGE_KEY),
  storage,
  whitelist: ["example", "auth"],
  transforms: [
    encryptTransform({
      secretKey: "my-super-secret-key",
      onError: function (error) {
        // Handle the error.
        console.log(error);
      },
    }),
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (reducers: any) => {
  const persistedReducer = persistReducer(persistConfig, reducers);

  return persistedReducer;
};
