import { on } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { createReducer } from '@ngrx/store';

import { loginFailedAction } from './app.action';

export interface InitAppState {
  isLoading: boolean;
  loginError: string | undefined;
}
export const initialState: InitAppState = {
  isLoading: false,
  loginError: undefined
};
const initAppReducer = createReducer(
  initialState,
  on(loginFailedAction, (state, action) => {
    return Object.assign({}, state, { loginError: action.error, isLoading: false })
  }),
);
export function InitAppReducer(state: InitAppState | undefined, action: Action) {
  return initAppReducer(state, action);
}

