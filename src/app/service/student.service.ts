import { Injectable } from '@angular/core';
import { IStudent } from '../models/student.interface';
import { LIST_STUDENT } from '../mock/student.mock';

// importamos la lista de contactos MO

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  // Nos devuelve un listado de Contactos de la lista contact.mock.ts
  getStudents (): IStudent[] {
    return LIST_STUDENT; 
  }

  // Nos devuelve un Contacto a partir de su ID de la lista contact.mock.ts
  getStudentID (id: number): IStudent | undefined{

    const student  = LIST_STUDENT.find ((student: IStudent) => student.id == id );

    if ( student ) {
      return student;
    }
    else {
      return;
    }
  } 

  deleteStudent ( index: number) {
    LIST_STUDENT.splice (index, 1);
  }

  addStudent (student: IStudent) {
    LIST_STUDENT.unshift (student);
  }

  lengthContact () : number {
    return LIST_STUDENT.length;
  }

  editStudent (student: IStudent) {
    let Index = LIST_STUDENT.findIndex ( (list=> list.id == student.id)  );
    LIST_STUDENT[Index].id = student.id;
    LIST_STUDENT[Index].first_name = student.first_name;
    LIST_STUDENT[Index].last_name = student.last_name;
    LIST_STUDENT[Index].email = student.email;
    LIST_STUDENT[Index].group = student.group;
    LIST_STUDENT[Index].gender = student.gender;
}

}
