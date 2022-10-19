import { Injectable } from '@angular/core';
import { IContact } from '../models/contact.interface';
import { LIST_CONTACT } from '../mock/contact.mock';

// importamos la lista de contactos MO

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  // Nos devuelve un listado de Contactos de la lista contact.mock.ts
  getContacts (): IContact[] {
    return LIST_CONTACT; 
  }

  // Nos devuelve un Contacto a partir de su ID de la lista contact.mock.ts
  getContactID (id: number): IContact | undefined{

    const contact  = LIST_CONTACT.find ((contact: IContact) => contact.id == id );

    if ( contact ) {
      return contact;
    }
    else {
      return;
    }
  } 

  deleteContact ( index: number) {
    LIST_CONTACT.splice (index, 1);
  }

  addContact (contact: IContact) {
    LIST_CONTACT.unshift (contact);
  }

  lengthContact () : number {
    return LIST_CONTACT.length;
  }

  editContact (contact: IContact) {
    let Index = LIST_CONTACT.findIndex ( (list=> list.id == contact.id)  );
    LIST_CONTACT[Index].id = contact.id;
    LIST_CONTACT[Index].first_name = contact.first_name;
    LIST_CONTACT[Index].last_name = contact.last_name;
    LIST_CONTACT[Index].email = contact.email;
    LIST_CONTACT[Index].group = contact.group;
    LIST_CONTACT[Index].gender = contact.gender;
}

}
