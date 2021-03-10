import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from '@angular/forms';


import { LoginReactiveComponent } from 'src/app/Components/login-reactive/login-reactive.component';
import { JoinNowComponent } from 'src/app/Components/join-now/join-now.component';


@NgModule({
  declarations: [LoginReactiveComponent, JoinNowComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
