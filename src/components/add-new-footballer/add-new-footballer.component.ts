import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component ({
  selector: 'add-new-footballer',
  template: require('./add-new-footballer.component.html'),
  styles: [require('./add-new-footballer.component.scss')]
})
export class AddNewFootballersComponent {
  private myForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private fb: FormBuilder) {

    this.firstName = new FormControl('');
    this.lastName = new FormControl('');

    this.myForm = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }
}
