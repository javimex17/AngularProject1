import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { CourseService } from '../../../service/course.service';
import { ICourse } from '../../../models/course.interface';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-course',
  templateUrl: './pop-up-course.component.html',
  styleUrls: ['./pop-up-course.component.css']
})
export class PopUpCourse implements OnInit {

  actionBtn : string= "Save";

  @Output() addGroupInGrid: EventEmitter<any> = new EventEmitter<any>();

  form = this.fb.group ({
    id: ['', [Validators.required, Validators.min(0)]],
    name: ['', [Validators.required]],
    profesor: ['', [Validators.required]],
    inscripcion: ['']
   });


    constructor(  private fb: FormBuilder, 
                  private courseService: CourseService,  
                  @Inject (MAT_DIALOG_DATA) public editData: any,
                  private dialogRef : MatDialogRef<PopUpCourse>) { }

  ngOnInit(): void {

    if (this.editData) {

      this.actionBtn = 'Update',

        this.form.controls ['id'].setValue (this.editData.id);
        this.form.controls ['name'].setValue (this.editData.name);
        this.form.controls ['profesor'].setValue (this.editData.profesor);
        this.form.controls ['inscripcion'].setValue (this.editData.inscripcion);
    }

  }

  addCourse():void {
  
    const course: ICourse = {
      id: this.form.value.id,
      name: this.form.value.name,
      profesor: this.form.value.profesor,
      inscripcion: this.form.value.inscripcion
    }

    if (this.editData) {
      this.courseService.editCourse(course);
    }
    else{
      this.courseService.addCourse(course);
    }

    this.addGroupInGrid.emit (this.form.value);
  }

  validateNumber(): ValidatorFn {
      return (control: AbstractControl): {[key: string]:any} | null => {
      return (Number.isInteger ( parseInt (control.value))) ? null : { errorEdad: true }

    }
  }

}
