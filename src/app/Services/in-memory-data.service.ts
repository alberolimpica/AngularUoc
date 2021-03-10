import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from 'src/app/Models/user'
import { Activity } from 'src/app/Models/activity'


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

    const activities = [      
      { id : 1, name: "Museo Picasso", category: "Cultura y Patrimonio", price: 12, language: "ES", date:  Date.now()},
      { id : 2, name: "Museo Tyssen", category: "Cultura y Patrimonio", price: 10, language: "ES", date:  Date.now()},
    ];

    return {users, activities};
  }
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(users => users.id)) + 1 : 1;
  }  
  genIdActivity(activity: Activity[]): number {
    return activity.length > 0 ? Math.max(...activity.map(activity => activity.id)) + 1 : 1;
  }
}
