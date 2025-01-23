import { Injectable, Injector } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, debounceTime, filter, map, of, switchMap } from "rxjs";

import { initAppAction, initAppSuccessAction, loginFailedAction } from "./app.action";
import { GenericEffect } from "../shared/generics/store.generic";

@Injectable()
export class InitAppEffect extends GenericEffect {
  public initAppAction$ = createEffect(() => this.actions$.pipe(
    ofType(initAppAction),
    switchMap(() => of().pipe( //this.store.pipe(select(getTokenSelector))
      filter((token) => !!token),
      debounceTime(350),
      map((token: string) => {
        return initAppSuccessAction({ token });
      }),
      catchError((error: any) => of(loginFailedAction({ error })))
    ))
  ));

  constructor(
    injector: Injector,
    private actions$: Actions) {
    super(injector);
  }
}
