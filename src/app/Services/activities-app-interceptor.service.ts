import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpResponse} from '@angular/common/http';
import {HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http'

import {Observable} from 'rxjs';
import { UserStoreService } from '../Services/user-store.service';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesAppInterceptorService {

  constructor(private userStore: UserStoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('INTERCEPTING');
    if (this.userStore.token) {
      console.log('INTERCEPTING, HAS TOKEN');
      const authReq = req.clone({
        headers: req.headers.set(
          'X-AUTH-HEADER',
          this.userStore.token
        )
      });
      console.log('Making an authorized request');
      req = authReq;
    }
    return next.handle(req);
  }
}