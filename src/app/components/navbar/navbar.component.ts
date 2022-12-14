import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { SessionService } from '../../autentication/services/session.service';
import { Session } from '../../autentication/models/session';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  session$!: Observable<Session>
  sessionSubject!: BehaviorSubject<Session>
  susSession!: Subscription;
  sessions!: Session;

  @Output() messageEvent = new EventEmitter<number>()
  @Input() componentStd : number = 0;

  constructor(private sessionservice: SessionService, private router : Router) { }

  ngOnInit(): void {

    this.session$ = this.sessionservice.getSession();

    this.susSession = this.session$.subscribe({
      next: (sessions: Session) => {this.sessions = sessions},
      error: (error) => {console.error(error)},
    });

  }

  changeComponent (index: number) {
      this.messageEvent.emit (index)
  }

  setRoute (route : string) {

    this.sessionservice.setRouteSession (route);
    
  }

  logOut () {
    this.sessionservice.logOut();
    this.router.navigate (['login']);
  }

}


