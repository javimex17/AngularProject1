import { Injectable } from '@angular/core';
import { LIST_COMMISSION } from '../mock/commission.mock';
import { ICommission } from '../models/commission.interface';

@Injectable({
  providedIn: 'root'
})
export class ClassGroupService {

  constructor() { }

  // Nos devuelve un listado 
  getClassGroups (): ICommission[] {
    return LIST_COMMISSION; 
  }

  // Nos registro un Contacto a partir de su ID
  getClassGroupID (id: number): ICommission | undefined{

    const commission  = LIST_COMMISSION.find ((contact: ICommission) => contact.id == id );

    if ( commission ) {
      return commission;
    }
    else {
      return;
    }
  } 

  deleteClassGroup ( index: number) {
    LIST_COMMISSION.splice (index, 1);
  }

  addClassGroup (commission: ICommission) {
    LIST_COMMISSION.unshift (commission);
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

}