import { Component, OnInit } from '@angular/core';

import { IApplication } from '../../dashboard.model';

@Component({
  selector: 'hp-dashboard-application',
  templateUrl: './dashboard-application.component.html',
  styleUrls: ['./dashboard-application.component.scss']
})
export class DashboardApplicationComponent implements OnInit {
  public applications: IApplication[] = [];

  constructor() {
    this.applications = [{
      id: '0c4478ba-1297-4ab6-910c-b2f7b99b8e27',
      name: 'Home Owners',
      icon: 'villa'
    }, {
      id: '43772965-ed31-42ac-a1df-c9e9919f652a',
      name: 'Dues & Payments',
      icon: 'receipt_long'
    }, {
      id: '48a1dd0d-6217-4cd8-ac81-40b1ab952a63',
      name: 'Requests',
      icon: 'phone_in_talk'
    }, {
      id: '6634bcdc-08ce-4b37-853f-5ee73ba75d68',
      name: 'Bookings',
      icon: 'bookmark_check'
    }, {
      id: '6634bcdc-08ce-4b37-853f-5ee73ba75d68',
      name: 'Tenants',
      icon: 'diversity_3'
    }, {
      id: '6634bcdc-08ce-4b37-853f-5ee73ba75d68',
      name: 'Parkings',
      icon: 'commute'
    }];
  }

  ngOnInit(): void { }
}
