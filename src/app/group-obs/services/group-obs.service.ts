import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LIST_COURSE } from 'src/app/mock/course.mock';
import { ICourse } from '../../models/course.interface';


@Injectable()

export class CourseObsService {
  private courseSubject: BehaviorSubject<ICourse[]>;

  constructor() { 
    this.courseSubject = new BehaviorSubject<ICourse[]>(LIST_COURSE)
  }

  getCourses(): Observable<ICourse[]>{
    return this.courseSubject.asObservable();
  }

  getGroupId(id: number) : Observable<ICourse[]> {
    return this.getCourses().pipe(
      map((cursos: ICourse[]) => cursos.filter((curso: ICourse) => curso.id === id))
    )
  }

}
