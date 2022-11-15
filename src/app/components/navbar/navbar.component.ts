import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { SessionService } from '../../autentication/services/session.service';
import { Session } from '../../autentication/models/session';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  session$!: Observable<Session>

  
  //public componentStd : number = 0;

  @Output() messageEvent = new EventEmitter<number>()
  @Input() componentStd : number = 0;


  constructor(private sessionservice: SessionService) { }

  ngOnInit(): void {
    this.session$ = this.sessionservice.getSession();
  }

  changeComponent (index: number) {
      this.messageEvent.emit (index)

  }

}
