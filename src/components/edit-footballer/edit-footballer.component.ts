import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FootballersService } from '../../services/footballers.service';
import { ActivatedRoute } from '@angular/router';

@Component ({
  selector: 'edit-footballer',
  template: require('./edit-footballer.component.html'),
  styles: [require('./edit-footballer.component.scss')],
})
export class EditFootballerComponent {
  private myForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  private country: FormControl;
  private club: FormControl;

  private footballerId: string;

  constructor(private footballersService: FootballersService,
              private activatedRoute: ActivatedRoute,
              private builder: FormBuilder) {

    this.firstName = new FormControl('');
    this.lastName = new FormControl('');
    this.country = new FormControl('');
    this.club = new FormControl('');

    this.myForm = this.builder.group(
      Object.keys(this)
        .filter((attr) => this[attr] instanceof FormControl)
        .reduce((accumulator, currentVal) => {
          accumulator[currentVal] = this[currentVal];
          return accumulator;
        }, {})
    );

    this.activatedRoute.params
      .subscribe((params: any) => this.footballerId = params.footballer_id);

    this.footballersService.fetchFootballer(this.footballerId)
      .filter(res => !!res)
      .subscribe((product: any) => {
        Object.keys(product)
          .filter((key) => product.hasOwnProperty(key) && this.myForm.controls[key] instanceof FormControl)
          .forEach((key) => {
            (<FormControl>this[key]).updateValue(product[key]);
          });
      });
  }
}
