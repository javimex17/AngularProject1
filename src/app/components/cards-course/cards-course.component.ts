import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-cards-course',
  templateUrl: './cards-course.component.html',
  styleUrls: ['./cards-course.component.css']
})
export class CardsCourseComponent implements OnInit {


  ELEMENT_DATA = this.courseService.getCourse ();


  constructor(private courseService : CourseService) { }

  ngOnInit(): void {
  }

}
