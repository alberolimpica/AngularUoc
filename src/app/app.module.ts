import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Services/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginReactiveComponent } from './Components/login-reactive/login-reactive.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { AppRoutesModule } from './app-routes.module';
import { JoinNowComponent } from './Components/join-now/join-now.component';
import { MenuHeaderComponent } from './Components/menu-header/menu-header.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { UserStoreService } from './Services/user-store.service';
import { ActivitiesAppInterceptorService } from './Services/activities-app-interceptor.service';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { LogoutComponent } from './Components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginReactiveComponent,
    MessagesComponent,
    JoinNowComponent,
    MenuHeaderComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    MainPageComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutesModule
  ],
  providers: [AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: ActivitiesAppInterceptorService,
    multi: true,
  }, UserStoreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
