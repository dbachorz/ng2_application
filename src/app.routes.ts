import { Routes, RouterModule } from '@angular/router';
import { FootballersListComponent } from './components';

const appRoutes: Routes = [
  {
    path: 'footballers',
    component: FootballersListComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);