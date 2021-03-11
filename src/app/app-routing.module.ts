import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginReactiveComponent } from './Components/login-reactive/login-reactive.component';
import {JoinNowComponent} from './Components/join-now/join-now.component';
import {UserDashboardComponent} from './Components/user-dashboard/user-dashboard.component';
import {AdminDashboardComponent} from './Components/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { LogoutComponent } from './Components/logout/logout.component';


const appRoutes: Routes = [ 
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'login', component: LoginReactiveComponent },
  { path: 'register', component: JoinNowComponent },
  { path: 'logout', component: LogoutComponent,
  canActivate: [AuthGuard] },
  { path: 'userDashboard', component: UserDashboardComponent,
  canActivate: [AuthGuard] },
  { path: 'adminDashboard', component: AdminDashboardComponent,
  canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/main' },
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
