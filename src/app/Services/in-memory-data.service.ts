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
      { id : 1, name: "sara", surname: "Alberola Mahiques", birthdate: "10/10/1991", phone: "962264724", nationality:"ES", nif: "20449369t", about: "Student, programmer and sewist", password: "Alberola", isAdmin: true, email: "sara@example.com" },
      { id : 2, name: "mili", surname: "The Doggo", birthdate: "02/11/2008", phone: "962264724", nationality:"ES", nif: "20449369t", about: "Brown dog", password: "brownDog", isAdmin: false, email: "mili@example.com" },
    ];

    const activities = [      
      { id : 1, name: "Museo Picasso", category: "Cultura y Patrimonio", price: 12, language: "ES", date:  Date.now(), description: "Visita guiada", subcategory: "Museum", peopleRegistered: 13, isFavourite: false},
      { id : 2, name: "Museo Tyssen", category: "Cultura y Patrimonio", price: 10, language: "ES", date:  Date.now(), description: "Visita guiada", subcategory: "Museum", peopleRegistered: 12, isFavourite: true},
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
