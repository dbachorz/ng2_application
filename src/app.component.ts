import { HttpWrapper } from './shared/providers/http-wrapper';
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { XHeaderComponent } from './components';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, XHeaderComponent],
    template: require('./app.component.html'),
    styles: [require('./app.component.scss')],
})

export class AppComponent {
    constructor(private router: Router,
                private httpWrapper: HttpWrapper) {
        this.httpWrapper.setHeader('Content-Type', 'application/json');
        console.log('app constructor');
    }
}
