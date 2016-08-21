import { Component } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'x-header',
  template: require('./x-header.component.html'),
  styles: [require('./x-header.component.scss')],
  directives: [ROUTER_DIRECTIVES]
})

export class XHeaderComponent {
  constructor(private router: Router) {

  }
}
