import { HttpWrapper } from './../shared/providers/http-wrapper';
import { Injectable } from '@angular/core';
import { FootballerModel } from '../../src/models/footballer.model';

@Injectable()
export class FootballersService {
  constructor(private httpWrapper: HttpWrapper) {
  };

  fetchFootballers() {
    return this.httpWrapper.get('footballers');
  }

  fetchFootballer(id) {
    return this.httpWrapper.get(`footballers/${id}`);
  }

  updateFootballer(footballer: FootballerModel, footballerId) {
    const payload =  {
      firstName: footballer.firstName,
      lastName: footballer.lastName,
      country: footballer.country,
      club: footballer.club,
    };
    return this.httpWrapper.put(`footballers/${footballerId}`, payload).subscribe();
  }

  addFootballer(footballer: FootballerModel) {
    const payload =  {
      firstName: footballer.firstName,
      lastName: footballer.lastName,
      country: footballer.country,
      club: footballer.club,
    };
    this.httpWrapper.post('footballers', payload).subscribe();
  }

  removeFootballer(footballerId) {
    this.httpWrapper.delete(`footballers/${footballerId}`).subscribe();
  }
}
