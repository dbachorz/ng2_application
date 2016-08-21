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
    constructor(private router: Router) {
    }
}
