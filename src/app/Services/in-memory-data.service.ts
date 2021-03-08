import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [      
      { name: "sara", password: "Alberola", isAdmin: true },
      { name: "mili", password: "brownDog", isAdmin: false },
      { name: "july", password: "whiteDog", isAdmin: false},
    ];
    return {users};
  }
}
