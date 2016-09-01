import { HttpWrapper } from './../shared/providers/http-wrapper';
import { Injectable } from '@angular/core';
import { FootballerModel } from '../../src/models/footballer.model';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions, Http, Response } from '@angular/http';

@Injectable()
export class FootballersService {

  constructor(private httpWrapper: HttpWrapper) {
  };

  addFootballer(footballer: FootballerModel) {
    const payload =  {
      name: footballer.firstName,
      // last_name: footballer.lastName,
    };
    console.log('payload', payload);
    this.httpWrapper.post('bears', payload)
      .subscribe(
        res => console.log(res),
        err => console.log(err));
  }
}
