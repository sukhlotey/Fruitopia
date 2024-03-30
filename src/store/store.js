import { combineReducers, configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";
import counterSlice from "./slices/counterSlice";
// import cartDataSlice from "./slices/cartDataSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import rootReducer from './reducer'

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["api"], // Add any reducers with non-serializable data to the blacklist
};
const rootReducer = combineReducers({
  data: apiSlice,
  counter: counterSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

});

// export default store;

export { store };
export const persistor = persistStore(store);
