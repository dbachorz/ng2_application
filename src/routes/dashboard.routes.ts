import { DashboardComponent } from './../components';
import { FootballersComponent } from './../components';
import { provideRouter, RouterConfig }  from '@angular/router';

const DASHBOARD_ROUTES: RouterConfig = [{
  path: 'dashboard',
  component: DashboardComponent,
  children: [{
    path: '',
    component: FootballersComponent
  }, {
    path: 'footballers',
    component: FootballersComponent
  }]
}];

export const dashboardRouterProvider = [
  provideRouter(DASHBOARD_ROUTES)
];