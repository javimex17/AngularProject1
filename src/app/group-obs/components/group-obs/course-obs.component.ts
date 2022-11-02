import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/models/course.interface';
import { CourseObsService } from '../../services/group-obs.service';

@Component({
  selector: 'app-course-obs',
  templateUrl: './course-obs.component.html',
  styleUrls: ['./course-obs.component.css']
})
export class CourseObsComponent implements OnInit {
  group$!: Observable<ICourse[]>

  
  constructor( private course: CourseObsService) { }

  ngOnInit(): void {
    this.group$ = this.course.getCourses();
  }

}
