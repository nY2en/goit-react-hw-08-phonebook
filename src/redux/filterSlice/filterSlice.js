import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    write(state, action) {
      return action.payload;
    },
  },
});

export const { write } = filterSlice.actions;
