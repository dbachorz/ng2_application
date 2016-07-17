import { Component } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'x-header',
  template: require('./x-header.component.html'),
  styleUrls: ['./src/components/dashboard/header/x-header.component.less'],
  directives: [ROUTER_DIRECTIVES]
})

export class XHeaderComponent {
  constructor(private router: Router) {

  }
}
