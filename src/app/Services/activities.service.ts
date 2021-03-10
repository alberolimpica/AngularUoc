import { Injectable } from '@angular/core';

import { Activity } from 'src/app/Models/activity'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private activitiesUrl = 'api/activities';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) { }

  getActivities():  Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activitiesUrl).pipe(
      tap(_ => this.log('fetched activities')),
      catchError(this.handleError<Activity[]>('getActivities', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {  
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`ActivitiesService: ${message}`)
  }
}
