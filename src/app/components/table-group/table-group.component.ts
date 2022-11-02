import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-table-group',
  templateUrl: './table-group.component.html',
  styleUrls: ['./table-group.component.css']
})
export class TableGroupComponent implements OnInit {


  ELEMENT_DATA = this.courseService.getCourse ();


  constructor(private courseService : CourseService) { }

  ngOnInit(): void {
  }

  filtrarCurso () {
    
  }


}
