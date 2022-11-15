import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../../autentication/services/session.service';
import { Session } from '../../autentication/models/session';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticationGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {


  constructor (
    private session : SessionService,
    private router : Router
  ){

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.session.getSession().pipe (
      map((session: Session) => {
        if (session.activeSession) {
          return true;
        } else {
          this.router.navigate (['login'])
          return false;
        }
      })
    )
  }



  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
