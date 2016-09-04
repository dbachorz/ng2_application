import { Routes, RouterModule } from '@angular/router';
import { AddNewFootballersComponent,
         FootballersListComponent,
         EditFootballerComponent,
       } from './components';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/footballers-list',
    pathMatch: 'full',
  },
  {
    path: 'footballers-list',
    component: FootballersListComponent,
  },
  {
    path: 'add-new-footballer',
    component: AddNewFootballersComponent,
  },
  {
    path: ':footballer_id/edit',
    component: EditFootballerComponent,
  },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);