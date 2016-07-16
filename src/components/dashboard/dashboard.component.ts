import { Component } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'dashboard',
  template: require('./dashboard.component.html'),
  styleUrls: ['./src/components/dashboard/dashboard.component.less'],
  directives: [ROUTER_DIRECTIVES]
})

export class DashboardComponent {
  constructor(private router: Router) {

  }

  handleClick() {
    this.router.navigate(['/dashboard/footballers']);
  }
}
