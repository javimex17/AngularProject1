import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Session } from '../../autentication/models/session';
import { map } from 'rxjs/operators';
import { SessionService } from 'src/app/autentication/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {


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
          if (session.activeUser?.admin) {
            return true;
          } else {
            alert ("No tiene permiso para acceder")
            this.router.navigate (['login'])
            return false;
          }
        })
      )
  }
  
}
