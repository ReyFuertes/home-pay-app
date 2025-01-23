import { createSelector } from '@ngrx/store';
import { AppState } from '.';

export const selectedState = (state: AppState) => state.app;
export const isAppLoadingSelector = createSelector(
  selectedState,
  state => state?.isLoading || false);
