import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../service/contact.service';
import { IContact } from '../../models/contact.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  listContacts: IContact [] = [];

  //Inyecto el servicio en el constructor
  constructor(private contactService : ContactService) { }

  ngOnInit(): void {

    // Obtener lista de contactos que nos ofrece el servicio ContactService
    // y lo paso al array listContacts
    this.listContacts = this.contactService.getContacts ();

  }

}
