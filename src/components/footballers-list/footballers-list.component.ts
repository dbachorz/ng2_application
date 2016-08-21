import { Component } from '@angular/core';

@Component ({
  selector: 'footballers',
  template: require('./footballers-list.component.html'),
  styles: [require('./footballers-list.component.scss')]
})
export class FootballersListComponent {
  constructor() {

  }
}