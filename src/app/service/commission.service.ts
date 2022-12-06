import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LIST_COMMISSION } from '../mock/commission.mock';
import { ICommission } from '../models/commission.interface';

@Injectable({
  providedIn: 'root'
})
export class ClassGroupService {

  private commission: BehaviorSubject<ICommission[]>;

  constructor() { 
    this.commission = new BehaviorSubject<ICommission[]>(LIST_COMMISSION)
  }

  // Nos devuelve un listado 
  getCommission (): Observable<ICommission[]> {
    return this.commission.asObservable();
  }

  // Nos registro un Contacto a partir de su ID
  getCommissionID (id: number) {
    return this.commission.asObservable();
  } 

  deleteCommission ( index: number) {
    LIST_COMMISSION.splice (index, 1);
    this.commission.next (LIST_COMMISSION);
  }

  addClassGroup (commission: ICommission) {
    LIST_COMMISSION.unshift (commission);
    this.commission.next (LIST_COMMISSION);
  }

  editGroup (commission: ICommission) {
    let Index = LIST_COMMISSION.findIndex ( (list=> list.id == commission.id)  );

    LIST_COMMISSION[Index].id = commission.id;
    LIST_COMMISSION[Index].name = commission.name;
    
/*
    if (commission.idCourse  != undefined) {
      LIST_COMMISSION[Index].idCourse.id = commission.idCourse.id;
    }
      LIST_COMMISSION[Index].idCourse.id = commission.idCourse?.id;
      LIST_COMMISSION[Index].idCourse.name = commission.idCourse.name;
      LIST_COMMISSION[Index].idCourse.profesor = commission.idCourse.profesor;
      LIST_COMMISSION[Index].idCourse.inscripcion = commission.idCourse.inscripcion;
        for ( let i = 0; i < commission.subscriptions.length; i++ ) {
          LIST_COMMISSION[Index].subscriptions [i].id = commission.subscriptions[i].id;
          LIST_COMMISSION[Index].subscriptions [i].first_name = commission.subscriptions[i].first_name;
          LIST_COMMISSION[Index].subscriptions [i].email = commission.subscriptions[i].email;
          LIST_COMMISSION[Index].subscriptions [i].gender = commission.subscriptions[i].gender;
          LIST_COMMISSION[Index].subscriptions [i].group = commission.subscriptions[i].group;
        }
*/

    LIST_COMMISSION [Index].fechaInicio = commission.fechaInicio;
    LIST_COMMISSION [Index].fechaFin = commission.fechaFin;

  }

  addStudentCommission (indexCommission : number, student : number) {

        


  }


}