import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: `<router-outlet></router-outlet>`,
    styles: [require('./app.component.less')],
    encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
    constructor(private router: Router) {
    }
}