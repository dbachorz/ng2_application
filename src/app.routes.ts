import { Routes, RouterModule } from '@angular/router';
import { AddNewFootballersComponent,
         FootballersListComponent
       } from './components';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/footballers-list',
    pathMatch: 'full'
  },
  {
    path: 'footballers-list',
    component: FootballersListComponent
  },
  {
    path: 'add-new-footballer',
    component: AddNewFootballersComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);