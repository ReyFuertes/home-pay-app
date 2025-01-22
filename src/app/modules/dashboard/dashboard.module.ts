import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'primeng/chart';

import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardChartComponent } from './components/dashboard-chart/dashboard-chart.component';
import { DashboardRecentVisitedComponent } from './components/dashboard-recent-visited/dashboard-recent-visited.component';

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
    DashboardPageComponent,
    DashboardChartComponent,
    DashboardRecentVisitedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChartModule,
    ChartModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class DashboardModule { }