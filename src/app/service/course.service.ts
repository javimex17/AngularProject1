import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LIST_COURSE } from '../mock/course.mock';
import { ICourse } from '../models/course.interface';
import { IStudent } from '../models/student.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: BehaviorSubject<ICourse[]>;

  constructor() { 
    this.courses = new BehaviorSubject<ICourse[]>(LIST_COURSE)
  }

  // Nos devuelve un listado 
  getCourse (): Observable<ICourse[]>{
    return this.courses.asObservable();
  }

  // Nos registro un Curso a partir de su ID
  getCourseID (id: number) {
    return this.courses.asObservable();
  } 

  addCourse (contact: ICourse) {
    LIST_COURSE.unshift (contact);
    this.courses.next (LIST_COURSE);
  }

  deleteCourse ( index: number) {
    LIST_COURSE.splice (index, 1);   
    this.courses.next (LIST_COURSE);
  }


  editCourse (course: ICourse) {
 
    let index = LIST_COURSE.findIndex((courseOther: ICourse) => courseOther.id === course.id);

    if (index > -1) {
      LIST_COURSE [index] = course;
    }
    this.courses.next (LIST_COURSE);
  }

}
