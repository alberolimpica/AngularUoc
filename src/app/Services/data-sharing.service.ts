import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataSharingService {
 
  
  public loginStatus = 0; // 0 = not logged in, 1 = logged in

  setLoginStatus(status: number) {
    this.loginStatus = status;
  }
}