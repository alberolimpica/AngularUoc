import { Injectable } from '@angular/core';

@Injectable()
export class UserStoreService {

  private _token: string = "";
  constructor() { }

  set token(token: string) {
    console.log("set token ", token);
    this._token = token;
  }

  get token() {
    return this._token;
  }

  isLoggedIn() {
    console.log("isLoggedIn ", this.token);
    return this.token != "";
  }

}