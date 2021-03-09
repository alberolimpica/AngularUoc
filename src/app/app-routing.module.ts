import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginReactiveComponent } from './Components/login-reactive/login-reactive.component';
import {JoinNowComponent} from './Components/join-now/join-now.component';
import {UserDashboardComponent} from './Components/user-dashboard/user-dashboard.component';
import {AdminDashboardComponent} from './Components/admin-dashboard/admin-dashboard.component';


const appRoutes: Routes = [ 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginReactiveComponent },
  { path: 'register', component: JoinNowComponent },
  { path: 'userDashboard', component: UserDashboardComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }
