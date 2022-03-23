import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import patientReducer from "./patientRedux";
import houseReducer from "./houseRedux"
import roadReducer from "./roadRedux"
import healthplanReducer from './healthPlanRedux'
import houseplanReducer from "./housePlanRedux"
import roadplanReducer from "./roadPlanRedux"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  patient: patientReducer,
  house : houseReducer,
  road : roadReducer,
  healthplan : healthplanReducer,
  houseplan: houseplanReducer,
  roadplan : roadplanReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
