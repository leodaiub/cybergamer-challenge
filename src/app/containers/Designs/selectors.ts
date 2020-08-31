import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.designs || initialState;

export const selectDesigns = createSelector(
  [selectDomain],
  designsState => designsState,
);
