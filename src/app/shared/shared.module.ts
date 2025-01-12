import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';

import { TopNavComponent } from './components/top-nav/top-nav.component';

@NgModule({
  declarations: [
    TopNavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BadgeModule
  ],
  exports: [TopNavComponent],
  providers: [],
})
export class SharedModule { }