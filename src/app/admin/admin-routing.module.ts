import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from 'src/app/Components/admin-dashboard/admin-dashboard.component';


const appRoutes: Routes = [ 
  { path: 'adminDashboard', component: AdminDashboardComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})

export class AdminRoutingModule { }
