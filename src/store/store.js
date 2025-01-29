import { configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authSlice from "./authSlice";

// Redux persist configuration
const persistConfig = {
  key: "auth",
  storage,
};

// create a persisted reducer for auth
const persistedAuthReducer = persistReducer(persistConfig, authSlice);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultModdleware) =>
    getDefaultModdleware({
      serializableCheck: false, //Disable warnings for redux-persist
    }),
});

const persistor = persistStore(store);
export { store, persistor };
