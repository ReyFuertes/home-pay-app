import { createAction, props } from "@ngrx/store";

export enum AppInitActionTypes {
  initAppAction = '[App] initialize',
  initAppSuccessAction = '[App] initialize (success)',
  loginFailedAction = '[App] login (failed)',
}
export const initAppAction = createAction(
  AppInitActionTypes.initAppAction,
);
export const initAppSuccessAction = createAction(
  AppInitActionTypes.initAppSuccessAction,
  props<{ token: string }>()
);
export const loginFailedAction = createAction(
  AppInitActionTypes.loginFailedAction,
  props<{ error: string }>()
);