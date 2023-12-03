import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todosSlice from "./todosSlice";

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, todosSlice);

export default configureStore({
  reducer: {
    todos: persistedReducer,
  },
});