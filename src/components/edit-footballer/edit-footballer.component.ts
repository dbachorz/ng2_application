import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FootballersService } from '../../services/footballers.service';
import { ActivatedRoute } from '@angular/router';

@Component ({
  selector: 'edit-footballer',
  template: require('./edit-footballer.component.html'),
  styles: [require('./edit-footballer.component.scss')],
})
export class EditFootballerComponent implements OnInit {
  private footballerId: string;
  private myForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  private country: FormControl;
  private club: FormControl;

  constructor(private footballersService: FootballersService,
              private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => this.footballerId = params.footballer_id);
  }
}
