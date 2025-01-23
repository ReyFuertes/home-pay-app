import { Directive } from '@angular/core';

import { GenericDestroy } from './destroy.generic';

@Directive()
export class GenericApplication extends GenericDestroy {
  constructor() {
    super();
  }
}
