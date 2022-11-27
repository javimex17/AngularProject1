import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Session } from 'src/app/autentication/models/session';
import { SessionService } from 'src/app/autentication/services/session.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  session$!: Observable<Session>
  sessionSubject!: BehaviorSubject<Session>
  susSession!: Subscription;
  sessions!: Session;

  constructor(private sessionservice: SessionService) { }

  ngOnInit(): void {

    this.session$ = this.sessionservice.getSession();

    this.susSession = this.session$.subscribe({
      next: (sessions: Session) => {this.sessions = sessions},
      error: (error) => {console.error(error)},
    });


  }

}
