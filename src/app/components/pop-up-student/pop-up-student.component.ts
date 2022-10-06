import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';

import { IContact } from '../../models/contact.interface';

@Component({
  selector: 'app-pop-up-student',
  templateUrl: './pop-up-student.component.html',
  styleUrls: ['./pop-up-student.component.css']
})
export class PopUpStudentComponent implements OnInit {
  groups: any[] = [
    {value: 'Junior', viewValue: 'Junior'},
    {value: 'Senior', viewValue: 'Senior'}
  ];


  @Output() addStudentInGrid: EventEmitter<any> = new EventEmitter<any>();


 form = this.fb.group ({
  id: ['', [Validators.required, Validators.min(0)]],
  first_name: ['', [Validators.required]],
  last_name: ['', [Validators.required]],
  email: ['', [Validators.required]],
  gender: ['', [Validators.required]],
  group: ['', [Validators.required]]
 });

  genders: any[] = [
    {value: 'Female', viewValue: 'Female'},
    {value: 'Male', viewValue: 'Male'}
  ];

  constructor(private fb: FormBuilder, private contactService : ContactService) { 

  }

  ngOnInit(): void {
  }

  addStudent():void {
  
    const student: IContact = {
      id: this.form.value.id,
      first_name: this.form.value.first_name,
      last_name: this.form.value.last_name,
      avatar: this.form.value.avatar,
      email: this.form.value.email,
      gender: this.form.value.gender,
      group: this.form.value.group,
    }

    this.contactService.addContact(student);
    this.addStudentInGrid.emit (this.form.value);
  }

  validateNumber(): ValidatorFn {
    return (control: AbstractControl): {[key: string]:any} | null => {
      return (Number.isInteger ( parseInt (control.value))) ? null : { errorEdad: true }

    }
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

}
