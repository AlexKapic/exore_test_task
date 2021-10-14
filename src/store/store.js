import { configureStore } from "@reduxjs/toolkit";
import productsApiReducer from "./productsApi/slice";
import productsOwnReducer from "./productsOwn/slice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  REGISTER,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const productsOwn = persistReducer(persistConfig, productsOwnReducer);

export const store = configureStore({
  reducer: {
    productsOwn,
    productsApi: productsApiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
