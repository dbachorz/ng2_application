import { AppComponent }       from './app.component';
import { NgModule } from '@angular/core';
import { routing,
  appRoutingProviders } from './app.routes';
import { BrowserModule }  from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {

}