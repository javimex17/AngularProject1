import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LIST_COURSE } from '../mock/course.mock';
import { ICourse } from '../models/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseSubject: BehaviorSubject<ICourse[]>;

  constructor() { 
    this.courseSubject = new BehaviorSubject<ICourse[]>(LIST_COURSE)
  }

  // Nos devuelve un listado 
  getCourse (): ICourse[] {
    return LIST_COURSE;
  }

  // Nos registro un Contacto a partir de su ID
  getCourseID (id: number) : ICourse | undefined{
    
    const contact  = LIST_COURSE.find ((contact: ICourse) => contact.id == id );

    if ( contact ) {
      return contact;
    }
    else {
      return;
    }
  } 

  deleteCourse ( index: number) {
    LIST_COURSE.splice (index, 1);
  }

  addCourse (contact: ICourse) {
    LIST_COURSE.unshift (contact);
  }

  editCourse (contact: ICourse) {
    let Index = LIST_COURSE.findIndex ( (list=> list.id == contact.id)  );
    LIST_COURSE[Index].id = contact.id;
    LIST_COURSE[Index].name = contact.name;
    LIST_COURSE[Index].profesor = contact.profesor;
    LIST_COURSE[Index].inscripcion = contact.inscripcion;
  }

}
