import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
import { persistStore, persistReducer } from "redux-persist";

import rootReducer, { rootPersistConfig } from "./root-reducer";
import { baseAnimeApi } from "./axios-base-query";

export const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(baseAnimeApi.middleware),
});

export const persistor = persistStore(store);

/**
 * Typed helpers
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useSelector = useAppSelector;
export const useDispatch = () => useAppDispatch<AppDispatch>();

export const { dispatch } = store;