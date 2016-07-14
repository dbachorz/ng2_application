import 'reflect-metadata';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'ts-helpers';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HOME_ROUTES } from './routes/home.routes';
import { provideRouter } from '@angular/router';

bootstrap(AppComponent, [
    provideRouter([
        ...HOME_ROUTES
    ])
]);
