import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hp-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  public pageTitle: string = 'Dashboard';
  
  constructor() { }

  ngOnInit(): void { }
}
