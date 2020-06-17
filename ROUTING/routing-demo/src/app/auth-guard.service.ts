import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    //throw new Error("Method not implemented.");
 return this.canActivate(childRoute,state)

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    //throw new Error("Method not implemented.");
    return this.authService.isAuthenticated().then((authenticateVal: boolean) => {
      if (authenticateVal) {
        return true
      } else {
        return this.router.navigate(['/'])
      }

    })
  }

  constructor(private authService: AuthService, private router: Router) { }
}
