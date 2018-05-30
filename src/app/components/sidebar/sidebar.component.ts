import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
  { path: 'user', title: 'User Profile', icon: 'pe-7s-user', class: '' },
  { path: 'notifications', title: 'Notifications', icon: 'pe-7s-bell', class: '' },
  { path: 'upgrade', title: 'Upgrade to PRO', icon: 'pe-7s-rocket', class: 'active-pro' },
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
