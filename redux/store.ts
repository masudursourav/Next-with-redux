import { configureStore } from "@reduxjs/toolkit";
import { useDispatch as useReduxDispatch } from "react-redux";
import { middleware } from "./middleware";
import { reducer } from "./rootReducer";
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware);
  },
});

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export type ReduxDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxStore = typeof store;
