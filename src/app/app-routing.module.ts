import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginReactiveComponent } from './Components/login-reactive/login-reactive.component';
import {JoinNowComponent} from './Components/join-now/join-now.component';


const appRoutes: Routes = [ 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginReactiveComponent },
  { path: 'register', component: JoinNowComponent },
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
