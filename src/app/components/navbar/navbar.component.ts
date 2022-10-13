import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //public componentStd : number = 0;

  @Output() messageEvent = new EventEmitter<number>()
  @Input() componentStd : number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  changeComponent (index: number) {
      this.messageEvent.emit (index)

  }

}
