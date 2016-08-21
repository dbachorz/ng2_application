import { Routes, RouterModule } from '@angular/router';
import { FootballersComponent } from './components';

const appRoutes: Routes = [{
    path: '',
    redirectTo: '/footballers',
    pathMatch: 'full'
  }, {
    path: 'footballers', component: FootballersComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);