import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { TopNavComponent } from './components/top-nav/top-nav.component';

@NgModule({
  declarations: [
    TopNavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BadgeModule,
    OverlayPanelModule
  ],
  exports: [TopNavComponent],
  providers: [],
})
export class SharedModule { }