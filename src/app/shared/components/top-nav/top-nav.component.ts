import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'hp-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  public sidebarVisible: boolean = false;

  constructor(private applicationService: ApplicationService) { }

  public onShowSidebar(): void {
    this.applicationService.setSidebarVisibility(true);
  }
}
