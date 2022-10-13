import { Injectable } from '@angular/core';
import { LIST_CLASSGROUP } from '../mock/classGroup.mock';
import { IClassGroup } from '../models/classGroup.interface';

@Injectable({
  providedIn: 'root'
})
export class ClassGroupService {

  constructor() { }

  // Nos devuelve un listado 
  getClassGroups (): IClassGroup[] {
    return LIST_CLASSGROUP; 
  }

  // Nos registro un Contacto a partir de su ID
  getClassGroupID (id: number): IClassGroup | undefined{

    const contact  = LIST_CLASSGROUP.find ((contact: IClassGroup) => contact.id == id );

    if ( contact ) {
      return contact;
    }
    else {
      return;
    }
  } 

  deleteClassGroup ( index: number) {
    LIST_CLASSGROUP.splice (index, 1);
  }

  addClassGroup (contact: IClassGroup) {
    LIST_CLASSGROUP.unshift (contact);
  }

  editGroup (contact: IClassGroup) {
    let Index = LIST_CLASSGROUP.findIndex ( (list=> list.id == contact.id)  );
    LIST_CLASSGROUP[Index].id = contact.id;
    LIST_CLASSGROUP[Index].name = contact.name;
  }

}
