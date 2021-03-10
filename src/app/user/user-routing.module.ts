import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserDashboardComponent} from 'src/app/Components/user-dashboard/user-dashboard.component';


const appRoutes: Routes = [ 
  { path: 'userDashboard', component: UserDashboardComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})

export class UserRoutingModule { }