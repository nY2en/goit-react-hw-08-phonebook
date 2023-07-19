import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from 'redux/contactSlice/contactSlice';
import { filterSlice } from 'redux/filterSlice/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});

