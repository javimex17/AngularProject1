import { Injectable } from '@angular/core';
import { IStudent } from 'src/app/models/student.interface';
import { LIST_STUDENT } from 'src/app/mock/student.mock';
import { BehaviorSubject, Observable, Subscription, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { ClassGroupService } from 'src/app/service/commission.service';
import { ICommission } from 'src/app/models/commission.interface';

// importamos la lista de contactos

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // Student
  student!: IStudent;
  students$!: Observable<IStudent[]>;
  students!: Array<IStudent>;
  suscription : any;

  // Commission
  commission!: ICommission;
  commissions$!: Observable<ICommission[]>;
  commissions!: Array<ICommission>;
  suscriptionCommission: any;

 // private students : BehaviorSubject<IStudent[]>

  constructor (private http: HttpClient, private commissionService : ClassGroupService) { 
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

  getStudentCommissionLocalId (idStudent:number, idCommission: number): any {

    this.students$ = this.getStudents();
    this.suscription = this.students$.subscribe({
      next: (estudiantes: IStudent[]) => {
        this.students = estudiantes;

        const resultStudent = this.students.find ((objStudent) => {
          return objStudent.id === idStudent
        })

          this.commissions$ = this.commissionService.getCommission();
          this.suscriptionCommission = this.commissions$.subscribe({
            next: (commission: ICommission[]) => {
              this.commissions = commission;

              const resultCommission = this.commissions.find ((objCommission) => {
                return objCommission.id === idCommission
              })

              if (resultCommission != undefined) {
                if (resultStudent != undefined) {
                  this.addStudentInCommission (resultCommission, resultStudent );
                  }

                }

            }

          })

        return resultStudent;
      },
      error: (error) => {
        console.error(error);
      },
    });

  }

  addStudentInCommission (resultCommission : ICommission, resultStudent : IStudent) {

    if (  resultCommission.subscriptions?.find ((objCommission) => {
        return objCommission.id === resultStudent.id
      })
    )
    {
      alert ('El Estudiante ya está en esta comisión');
    }else {
      alert ('El estudiante se ha incluido en la comisión '+resultCommission.name);
      resultCommission.subscriptions?.push (resultStudent);
    }

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

    ).subscribe()
  }

  deleteStudent ( id: number) {

    this.http.delete<IStudent> (`${environment.api}/student/${id}`,{}).pipe (
      catchError (this.errorhttp)
  
    ).subscribe ();
  
   // this.students.next (LIST_STUDENT);
  }

  lengthContact () : number {
    return LIST_STUDENT.length;
  }

  editStudent (student: IStudent) {
    
    this.http.put<IStudent> (`${environment.api}/student/${student.id}`, student).pipe (
      catchError (this.errorhttp)
  
    ).subscribe ();
    
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
