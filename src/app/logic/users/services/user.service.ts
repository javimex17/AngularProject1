import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LIST_USER } from 'src/app/mock/user.mock';
import { IUser } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: BehaviorSubject<IUser[]>;

  constructor() { 
      this.users = new BehaviorSubject<IUser[]> (LIST_USER)
  }

  getUser (): Observable<IUser[]> {
    return this.users.asObservable();
  }

  getUserID (id: number) {
    return this.users.asObservable();

  }

  getUserLogin (userName: string, pswd : string, admin : boolean) : Observable<IUser[]> {

    return this.getUser().pipe (
      map ((users: IUser[]) => users.filter ( (user: IUser) => (user.name === userName && user.password === pswd && user.admin === admin ) )   )
    )
  }



}
