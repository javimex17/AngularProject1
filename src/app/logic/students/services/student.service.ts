import { Injectable } from '@angular/core';
import { IStudent } from 'src/app/models/student.interface';
import { LIST_STUDENT } from 'src/app/mock/student.mock';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

// importamos la lista de contactos MO

@Injectable({
  providedIn: 'root'
})
export class StudentService {


 // private students : BehaviorSubject<IStudent[]>

  constructor(private http: HttpClient) { 
   // this.students = new BehaviorSubject<IStudent[]> (LIST_STUDENT);
    
  }

  // Nos devuelve un listado de Estudiante de la lista 
  getStudents (): Observable<IStudent[]> {
    return this.http.get<IStudent[]> (`${environment.api}/student`, {
    headers: new HttpHeaders ({
      'content-type': 'application/json',
      'encoding': 'UTF-8'
    })
  }).pipe (
    catchError (this.errorhttp)

  )
    //return this.students.asObservable();
  }

  // Nos devuelve un Estudiante a partir de su ID de la lista
  getStudentId (id:number): Observable<IStudent> {
    return this.http.get<IStudent> (`${environment.api}/student/${id}`, {
      headers: new HttpHeaders ({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe (
      catchError (this.errorhttp)
  
    )
  }

  // Agregar un Estudiante
  addStudent (student: IStudent) {
    this.http.post (`${environment.api}/student/`, student,{
      headers: new HttpHeaders ({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe (
      catchError (this.errorhttp)

    ).subscribe(console.log)
  }

  deleteStudent ( id: number) {

    this.http.put<IStudent> (`${environment.api}/student/${id}`,{}).pipe (
      catchError (this.errorhttp)
  
    ).subscribe (console.log);
  
   // this.students.next (LIST_STUDENT);
  }

  lengthContact () : number {
    return LIST_STUDENT.length;
  }

  editStudent (student: IStudent) {
    
    this.http.put<IStudent> (`${environment.api}/student/${student.id}`, student).pipe (
      catchError (this.errorhttp)
  
    ).subscribe (console.log);
    
  }

  errorhttp (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.warn ('Error client', error.error.message);
      alert ();
    }else {
      console.warn('Error server', error)
 
    }

    return throwError( () => Error ());
  }

}
