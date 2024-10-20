import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

import miscellaneousReducer from "./features/miscellaneous";
import homeReducer from "./features/home";
import loaderReducer from "./features/loader";
import authReducer from "./features/auth";
import profileReducer from "./features/profile";

const rootReducer = combineReducers({
  miscellaneous: miscellaneousReducer,
  home: homeReducer,
  loader: loaderReducer,
  auth: authReducer,
  profile: profileReducer,
});

const persistConfig = {
  key: "root",
  storage,
  // Add any blacklist or whitelist configurations as needed
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
