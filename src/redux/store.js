import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'; 
//import logger from 'redux-logger';
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
import phoneBookReducer from './phoneBook/phoneBook-reducer';
import authReducer from './auth/auth-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
 // logger,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    phoneBook: phoneBookReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };