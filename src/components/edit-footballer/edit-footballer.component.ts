import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FootballersService } from '../../services/footballers.service';

@Component ({
  selector: 'edit-footballer',
  template: require('./edit-footballer.component.html'),
  styles: [require('./edit-footballer.component.scss')],
})
export class EditFootballerComponent implements OnInit {
  private myForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  private country: FormControl;
  private club: FormControl;

  constructor(private footballersService: FootballersService) { }

  ngOnInit() {
    console.log('edit on init');
    // this.footballersService.fetchFootballer(footballerId).subscribe(res => console.log(res));
  }
}
