import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import lists from './lists';

const rootReducer = combineReducers({ lists });

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['listSlice'], //Things u want to persist
  // blacklist: [''], //Things u dont
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }), // this is redundant and for demonstration only
  devTools: true, // this is redundant and for demonstration only
  //preloadedState: {your state object for initialization or rehydration}
});

const persistor = persistStore(store);

export { store, persistor };
