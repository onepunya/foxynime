import { combineReducers } from "redux";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { baseAnimeApi } from "./axios-base-query";

/**
 * Storage aman untuk SSR (Next.js)
 */
export const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key, value) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

export const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [], // RTK Query tidak perlu persist
};

/**
 * ROOT REDUCER (ONLY ANIME)
 */
const rootReducer = combineReducers({
  [baseAnimeApi.reducerPath]: baseAnimeApi.reducer,
});

export default rootReducer;