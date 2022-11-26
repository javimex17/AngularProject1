import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { SessionService } from '../../autentication/services/session.service';
import { Session } from '../../autentication/models/session';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  session$!: Observable<Session>
  sessionSubject!: BehaviorSubject<Session>
  

  @Output() messageEvent = new EventEmitter<number>()
  @Input() componentStd : number = 0;

  constructor(private sessionservice: SessionService, private router : Router) { }

  ngOnInit(): void {
    this.session$ = this.sessionservice.getSession();
  }

  changeComponent (index: number) {
      this.messageEvent.emit (index)
  }


  logOut () {
    this.sessionservice.logOut();
    this.router.navigate (['login']);
  }

}


