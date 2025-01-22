import { Component, OnInit } from '@angular/core';
import { IRecentVisited } from '../../dashboard.model';

@Component({
  selector: 'hp-dashboard-recent-visited',
  templateUrl: './dashboard-recent-visited.component.html',
  styleUrls: ['./dashboard-recent-visited.component.scss']
})
export class DashboardRecentVisitedComponent implements OnInit {
  public recentVisited: IRecentVisited[] = [];

  constructor() {
    this.recentVisited = [{
      id: '0c4478ba-1297-4ab6-910c-b2f7b99b8e27',
      name: 'Unit 9921'
    }, {
      id: '43772965-ed31-42ac-a1df-c9e9919f652a',
      name: 'Unit 8821'
    }, {
      id: '48a1dd0d-6217-4cd8-ac81-40b1ab952a63',
      name: 'Unit 9662'
    }, {
      id: '6634bcdc-08ce-4b37-853f-5ee73ba75d68',
      name: 'Unit 4421'
    }];
  }

  ngOnInit(): void { }
}
