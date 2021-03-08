import { Injectable } from '@angular/core';
import {User} from 'src/app/Models/user'
import { USERS } from 'src/app/mock-users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getUsers(): User[]{
    return USERS;
  }
}
