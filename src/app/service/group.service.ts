import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LIST_GROUP } from '../mock/group.mock';
import { IGroup } from '../models/group.interface';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groupSubject: BehaviorSubject<IGroup[]>;

  constructor() { 
    this.groupSubject = new BehaviorSubject<IGroup[]>(LIST_GROUP)
  }

  // Nos devuelve un listado 
  getGroups (): IGroup[] {
    return LIST_GROUP;
  }

  // Nos registro un Contacto a partir de su ID
  getGroupID (id: number) : IGroup | undefined{
    
    const contact  = LIST_GROUP.find ((contact: IGroup) => contact.id == id );

    if ( contact ) {
      return contact;
    }
    else {
      return;
    }
  } 

  deleteGroup ( index: number) {
    LIST_GROUP.splice (index, 1);
  }

  addGroup (contact: IGroup) {
    LIST_GROUP.unshift (contact);
  }

  editGroup (contact: IGroup) {
    let Index = LIST_GROUP.findIndex ( (list=> list.id == contact.id)  );
    LIST_GROUP[Index].id = contact.id;
    LIST_GROUP[Index].name = contact.name;
    LIST_GROUP[Index].fechaInicio = contact.fechaInicio;
    LIST_GROUP[Index].fechaFin = contact.fechaFin;
    LIST_GROUP[Index].inscripcion = contact.inscripcion;
    LIST_GROUP[Index].profesor = contact.profesor;
  }

}
