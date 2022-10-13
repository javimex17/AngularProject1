import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { IContact } from '../../models/contact.interface';

@Component({
  selector: 'app-pop-up-student',
  templateUrl: './pop-up-student.component.html',
  styleUrls: ['./pop-up-student.component.css']
})
export class PopUpStudentComponent implements OnInit {
  
  actionBtn : string= "Save";
  
  groups: any[] = [
    {value: 'Junior', viewValue: 'Junior'},
    {value: 'Senior', viewValue: 'Senior'}
  ];

  genders: any[] = [
    {value: 'Female', viewValue: 'Female'},
    {value: 'Male', viewValue: 'Male'}
  ];

  @Output() addStudentInGrid: EventEmitter<any> = new EventEmitter<any>();


 form = this.fb.group ({
  id: ['', [Validators.required, Validators.min(0)]],
  first_name: ['', [Validators.required]],
  last_name: ['', [Validators.required]],
  email: ['', [Validators.required], [Validators.email]],
  gender: ['', [Validators.required]],
  group: ['', [Validators.required]]
 });

 

  constructor(private fb: FormBuilder, 
              private contactService : ContactService,
              @Inject (MAT_DIALOG_DATA) public editData: any,
              private dialogRef : MatDialogRef<PopUpStudentComponent>) { 

  }

  ngOnInit(): void {


      if (this.editData) {

        this.actionBtn = 'Update',

          this.form.controls ['id'].setValue (this.editData.id)
          this.form.controls ['first_name'].setValue (this.editData.first_name)
          this.form.controls ['last_name'].setValue (this.editData.last_name)
          this.form.controls ['email'].setValue (this.editData.email)
      }

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
   if (this.editData) {
    this.contactService.editContact(student);
   }
    else {
    this.contactService.addContact(student);
    this.addStudentInGrid.emit (this.form.value);
  }

  }

  validateNumber(): ValidatorFn {
    return (control: AbstractControl): {[key: string]:any} | null => {
      return (Number.isInteger ( parseInt (control.value))) ? null : { errorEdad: true }

    }


  
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

}
