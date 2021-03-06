import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { LoginReactiveComponent } from './Components/login-reactive/login-reactive.component';
const routes: Routes = [
  {
    path: '',
    //component: LoginComponent 
    component: LoginReactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
