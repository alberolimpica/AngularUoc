import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginReactiveComponent } from 'src/app/Components/login-reactive/login-reactive.component';
import { JoinNowComponent } from 'src/app/Components/join-now/join-now.component';
import { MainPageComponent } from '../Components/main-page/main-page.component';


const appRoutes: Routes = [ 
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'login', component: LoginReactiveComponent },
  { path: 'register', component: JoinNowComponent },
  { path: '**', redirectTo: '/main' },
  { path: 'main', component: MainPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})

export class MainRoutingModule { }