import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filContactsReducer } from "./filtersSlice";
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

const persistConfigFil = {
  key: "root",
  version: 1,
  storage,
};

const persistConfigCon = {
  key: "contactsPersistor",
  version: 1,
  storage,
};

const persistedReducerFil = persistReducer(
  persistConfigFil,
  filContactsReducer
);
const persistedReducerContacts = persistReducer(
  persistConfigCon,
  contactsReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedReducerContacts,
    filContacts: persistedReducerFil,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
