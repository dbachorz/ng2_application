import { AppComponent }       from './app.component';
import { NgModule } from '@angular/core';
import { routing,
  appRoutingProviders } from './app.routes';
import { BrowserModule }  from '@angular/platform-browser';
import { FootballersComponent } from './components/footballers/footballers.component';
import {MdButtonModule} from '@angular2-material/button/button';
import {MdCheckboxModule} from '@angular2-material/checkbox/checkbox';
import {MdCardModule} from '@angular2-material/card/card';
import {MdProgressCircleModule} from '@angular2-material/progress-circle/progress-circle';
import {MdInputModule} from '@angular2-material/input/input';
import {MdToolbarModule} from '@angular2-material/toolbar/toolbar';
import {MdRippleModule} from '@angular2-material/core/ripple/ripple';
import {PortalModule} from '@angular2-material/core/portal/portal-directives';
import {OverlayModule} from '@angular2-material/core/overlay/overlay-directives';
import {RtlModule} from '@angular2-material/core/rtl/dir';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    BrowserModule,
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdInputModule,
    MdProgressCircleModule,
    MdRippleModule,
    MdToolbarModule,
    OverlayModule,
    PortalModule,
    RtlModule,
  ],
  declarations: [
    AppComponent,
    FootballersComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {

}