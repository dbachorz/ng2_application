import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { FootballersService } from '../../services/footballers.service';

@Component ({
  selector: 'add-new-footballer',
  template: require('./add-new-footballer.component.html'),
  styles: [require('./add-new-footballer.component.scss')]
})
export class AddNewFootballersComponent {
  private myForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  private country: FormControl;
  private club: FormControl;

  constructor(private fb: FormBuilder,
              private footballersService: FootballersService) {

    this.firstName = new FormControl('');
    this.lastName = new FormControl('');
    this.country = new FormControl('');
    this.club = new FormControl('');

    this.myForm = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      country: this.country,
      club: this.club,
    });
  }

  handleSubmit() {
    this.footballersService.addFootballer(this.myForm.value);
  }
}
