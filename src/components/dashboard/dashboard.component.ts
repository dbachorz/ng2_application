import { Component } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import { XHeaderComponent } from './header';

@Component({
  selector: 'dashboard',
  template: require('./dashboard.component.html'),
  styleUrls: ['./src/components/dashboard/dashboard.component.less'],
  directives: [ROUTER_DIRECTIVES, XHeaderComponent]
})

export class DashboardComponent {
  constructor(private router: Router) {

  }
}
