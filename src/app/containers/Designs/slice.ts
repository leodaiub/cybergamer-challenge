import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Designs container
export const initialState: ContainerState = {
  projects: [],
  project: {},
  loading: false,
  error: false,
};

const designsSlice = createSlice({
  name: 'designs',
  initialState,
  reducers: {
    getProjects(state) {
      state.loading = true;
    },
    getProjectsSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.projects = action.payload;
    },
    showProject(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    showProjectSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.project = action.payload;
    },
    error(state) {
      state.error = true;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = designsSlice;
