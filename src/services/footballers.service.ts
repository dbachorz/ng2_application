import { Injectable } from '@angular/core';
import { Footballer } from '../../src/models/footballer';

@Injectable()
export class FootballersService {
  saveFootballer(footballer: Footballer) {
    console.log(footballer);
  }
}