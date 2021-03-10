import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router , UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStoreService } from '../Services/user-store.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userStore: UserStoreService,
    private router: Router) {}
    
    canActivate(): boolean {
      console.log('AuthGuard#canActivate called');
  
      if (this.userStore.isLoggedIn()) { return true };
  
      console.log('AuthGuard#canActivate not authorized to access page');
      // Can store current route and redirect back to it
      // Store it in a service, add it to a query param
      this.router.navigate(['login']);
  
      return false;
    }
}
