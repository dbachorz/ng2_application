import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
  selector: 'footballers',
  template: require('./footballers-list.component.html'),
  styles: [require('./footballers-list.component.scss')]
})
export class FootballersListComponent {
  constructor(private router: Router) {}

  addNewFootballer() {
    this.router.navigate(['/add-new-footballer']);
  }
}