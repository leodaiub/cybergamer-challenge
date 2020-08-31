import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { PayloadAction } from '@reduxjs/toolkit';

// The initial state of the Auth container
export const initialState: ContainerState = {
  authenticated: false,
  user: {},
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkAuth(state) {
      const token = localStorage.getItem('access_token');
      const user = localStorage.getItem('user');
      if (token && user) {
        state.loading = false;
        state.authenticated = true;
        state.user = JSON.parse(user);
      }
    },
    onCode(state) {
      state.loading = true;
    },
    onCodeSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.user = action.payload;
      state.authenticated = true;
    },
  },
});

export const { actions, reducer, name: sliceKey } = authSlice;
