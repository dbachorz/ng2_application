import { NgModule }      from '@angular/core';

import { FootballersComponent }  from './footballers.component';
import { MdButtonModule } from '@angular2-material/button';

@NgModule({
  imports:      [ MdButtonModule ],
  declarations: [ FootballersComponent ],
  bootstrap:    [ FootballersComponent ]
})
export class FootballersModule { }