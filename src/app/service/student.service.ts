import { Injectable } from '@angular/core';
import { IStudent } from '../models/student.interface';
import { LIST_STUDENT } from '../mock/student.mock';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

// importamos la lista de contactos MO

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  private students : BehaviorSubject<IStudent[]>

  constructor() { 
    this.students = new BehaviorSubject<IStudent[]> (LIST_STUDENT);
  }

  // Nos devuelve un listado de Estudiante de la lista 
  getStudents (): Observable<IStudent[]> {
    return this.students.asObservable();
  }

  // Nos devuelve un Estudiante a partir de su ID de la lista
  getStudentId (id:number) {
    return  LIST_STUDENT[id-1];
  }

  // Agregar un Estudiante
  addStudent (student: IStudent) {
    LIST_STUDENT.unshift (student);
    this.students.next (LIST_STUDENT);
  }

  deleteStudent ( id: number) {
    LIST_STUDENT.splice (id, 1);
    this.students.next (LIST_STUDENT);
  }

  lengthContact () : number {
    return LIST_STUDENT.length;
  }

  editStudent (student: IStudent) {

    let index = LIST_STUDENT.findIndex((studentOther: IStudent) => studentOther.id === student.id);

    if (index > -1) {
      LIST_STUDENT [index] = student;
    }
    this.students.next (LIST_STUDENT);
  }

}
