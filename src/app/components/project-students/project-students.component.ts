import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-students',
  templateUrl: './project-students.component.html',
  styleUrls: ['./project-students.component.css']
})
export class ProjectStudentsComponent implements OnInit {

  @Input()  componentResponse : number = 0;

  constructor() { }

  ngOnInit(): void {

  
  }

  addGrid($event: any) {
    alert ('componente event')
  }

  receiveComponent($event: number) {

   return this.componentResponse = $event;

    
  }

}
