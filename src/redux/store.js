import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';

import middleware from './middleware';
// import contactsPersistConfig from './contactsItems/contacts-persist-config';
import {
  contactsReducer,
  errorReducer,
  loadingReducer,
} from './contactsItems/contacts-reducer';
import { filterReducer } from './filter/filter-reducer';

const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
  error: errorReducer,
  loading: loadingReducer,
};

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { store };
