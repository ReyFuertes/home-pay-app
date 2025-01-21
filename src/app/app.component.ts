import { Component } from '@angular/core';
import { takeUntil } from 'rxjs';

import { ApplicationService } from './modules/services/application.service';
import { GenericDestroy } from './shared/generics/application.generic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends GenericDestroy {
  public title: string = 'homepay-app';
  public sidebarVisibility: boolean = false;

  constructor(public applicationService: ApplicationService) {
    super();
    this.applicationService.getSidebarVisibility()
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe(visiblity => this.sidebarVisibility = visiblity);
  }
}
