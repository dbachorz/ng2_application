import { DashboardComponent } from './../components';
import { FootballersComponent, TrainersComponent, MatchesComponent } from './../components';
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
  }, {
    path: 'trainers',
    component: TrainersComponent
  }, {
    path: 'matches',
    component: MatchesComponent
  }]
}];

export const dashboardRouterProvider = [
  provideRouter(DASHBOARD_ROUTES)
];