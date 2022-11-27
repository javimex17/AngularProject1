import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Session } from '../models/session';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../logic/users/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  sessionSubject!: BehaviorSubject<Session>
  loginTrue$!: Observable<IUser[]>
  susUserLogin!: Subscription;
  userLogin!: Array<IUser>;

  constructor(private userService : UserService) {

    const session: Session = {
      activeSession: false
    } 
    this.sessionSubject   = new BehaviorSubject (session)

   }

  login (user: string, pswd: string, admin: boolean) {

    this.loginTrue$ = this.userService.getUserLogin ( user, pswd, admin ); 


    this.susUserLogin = this.loginTrue$.subscribe({
      next: (users: IUser[]) => {this.userLogin = users},
      error: (error) => {console.error(error)},
    });

    if (this.userLogin.length > 0) {

      const session: Session = {
        activeSession: true,
        activeUser : {
          name: user,
          password: pswd,
          admin: admin
        },
        activeRoute: 'Login'
      }
  
      this.sessionSubject.next (session);


    }
    else {
      alert ("El usuario no existe ");
    }

  }

  getSession(): Observable<Session> {
    return this.sessionSubject.asObservable();
  }

  logOut () {
    const session: Session = {
      activeSession: false,
      activeRoute: 'LogOut'

    }

    this.sessionSubject.next (session);

  }

  setRouteSession (route: string) {
    const session: Session = {
      activeSession: true,
      activeRoute: route
    }

    this.sessionSubject.next (session);
  }


}
