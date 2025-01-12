import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { DashboardPageComponent } from './dashboard-page.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent,
    children: [
      { path: '', component: DashboardPageComponent },
    ]
  }
];

@NgModule({
  declarations: [
    DashboardContainerComponent,
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class DashboardModule { }