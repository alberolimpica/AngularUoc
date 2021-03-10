import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/user'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { UserStoreService } from './user-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient, private userStore: UserStoreService) { }

  getUsers():  Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      tap(_ => this.log('fetched users')),
      catchError(this.handleError<User[]>('getusers', []))
    );
  }

  private log(message: string) {
    console.log(`UserService: ${message}`)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {  
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getUser(username: string):  Observable<User> {
    const url = `${this.usersUrl}/${username}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched hero username=${username}`)),
      catchError(this.handleError<User>(`getUser ${username}`))
    );
  }

  addUser(user: User): Observable<User> {
    const url = `${this.usersUrl}/login`;
    return this.http.post<User>(url, user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`added user w/ username=${newUser.name} and id= ${newUser.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  login(username: string, password: string): Observable<any> {
    const url = `${this.usersUrl}/register`;
    return this.http.post<User>(url, { username, password }, this.httpOptions).pipe(map((resp: any) => {
      this.userStore.token = resp.token;
      return resp;
    }));
  }
}
