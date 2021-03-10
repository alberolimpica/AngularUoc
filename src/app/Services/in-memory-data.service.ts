import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from 'src/app/Models/user'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [      
      { id : 1, name: "sara", password: "Alberola", isAdmin: true },
      { id : 2, name: "mili", password: "brownDog", isAdmin: false },
      { id : 3, name: "july", password: "whiteDog", isAdmin: false},
    ];
    return {users};
  }
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(users => users.id)) + 1 : 1;
  }
}
