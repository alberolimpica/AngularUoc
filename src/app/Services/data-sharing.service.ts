import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataSharingService {
 
  
  public loginStatus = 0; // 0 = not logged in, 1 = logged in
  public loginUser = 0; // 0 = tourist in, 1 = company

  setLoginStatus(status: number) {
    this.loginStatus = status;
  }

  setLoginUser(user: number) {
    this.loginUser = user;
  }
}