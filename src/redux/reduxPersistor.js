import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { authSlice } from './authSlice/authSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

