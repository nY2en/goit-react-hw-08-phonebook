import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', data);

      token.set(response.data.token);

      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/logIn',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', data);

      token.set(response.data.token);

      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/users/logout');

      token.unset();

      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    const { token: persistedToken } = thunkAPI.getState().auth;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('No valid token');
    }

    token.set(persistedToken);

    try {
      const response = await axios.get('/users/current');

      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
