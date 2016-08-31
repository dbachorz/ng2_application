import { Injectable } from '@angular/core';
import { FootballerModel } from '../../src/models/footballer.model';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { JSONAPI, JSONAPIObject } from '../providers/json-api';

@Injectable()
export class FootballersService {

  constructor(private http: Http){};

  addFootballer(footballer: FootballerModel) {
    const payload =  {
      first_name: footballer.firstName,
      last_name: footballer.lastName
    }
    console.log('payload', payload);
    return this.jsonapi.post('products', payload);
  }
}