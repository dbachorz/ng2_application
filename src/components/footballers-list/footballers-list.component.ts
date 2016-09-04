import { Observable } from 'rxjs/Observable';
import { FootballersService } from './../../services/footballers.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
  selector: 'footballers',
  template: require('./footballers-list.component.html'),
  styles: [require('./footballers-list.component.scss')]
})
export class FootballersListComponent {

  private footballersList$: Observable<any>;

  constructor(private router: Router,
              private footballersService: FootballersService) {
  }

  ngOnInit() {
    this.footballersList$ = this.footballersService.fetchFootballers();
  }

  addNewFootballer() {
    this.router.navigate(['/add-new-footballer']);
  }

  editFootballer(footballerId) {
    this.router.navigate(['57cb396d2e29e31e55000007/edit']);
  }

  removeFootballer(footballerId) {
    console.log(footballerId);
  }
}