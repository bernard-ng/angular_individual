import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  className: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/series', title: 'Series', icon: 'ni-tv-2', className: ''},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
