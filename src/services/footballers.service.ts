import { HttpWrapper } from './../shared/providers/http-wrapper';
import { Injectable } from '@angular/core';
import { FootballerModel } from '../../src/models/footballer.model';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions, Http, Response } from '@angular/http';

@Injectable()
export class FootballersService {

  constructor(private httpWrapper: HttpWrapper) {
  };

  fetchFootballers() {
    return this.httpWrapper.get('footballers');
  }

  addFootballer(footballer: FootballerModel) {
    const payload =  {
      firstName: footballer.firstName,
      lastName: footballer.lastName,
      country: footballer.country,
      club: footballer.club,
    };
    this.httpWrapper.post('footballers', payload);
  }
}
