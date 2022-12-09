import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { ICommission } from 'src/app/models/commission.interface';
import { ICourse } from 'src/app/models/course.interface';
import { ClassGroupService } from 'src/app/service/commission.service';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-pop-up-commission',
  templateUrl: './pop-up-commission.component.html',
  styleUrls: ['./pop-up-commission.component.css']
})
export class PopUpCommissionComponent implements OnInit {


  course!: ICourse;
  courses$!: Observable<ICourse[]>;
  courses!: Array<ICourse>;
  susCourses: Subscription;
  
  actionBtn : string= "Save";

  @Output() addGroupInGrid: EventEmitter<any> = new EventEmitter<any>();

  form = this.fb.group ({
    id: ['', [Validators.required, Validators.min(0)]],
    idGroup: ['', [Validators.required, Validators.min(0)]],
    name: ['', [Validators.required]],
    idCourse: new FormControl ({ disabled: false}),
    fechaInicio: new FormControl(new Date()), 
    fechaFin: new FormControl(new Date()), 

   });



  constructor(private fb: FormBuilder, 
              private classGroupService: ClassGroupService,
              private courseService: CourseService,
              @Inject (MAT_DIALOG_DATA) public editData: any,
                  private dialogRef : MatDialogRef<PopUpCommissionComponent>
              ) 
              { 

                this.courses$ = this.courseService.getCourse();

                this.susCourses = this.courses$.subscribe({
                  next: (courses: ICourse[]) => {this.courses = courses},
                  error: (error) => {console.error(error)},
                });

              }

  ngOnInit(): void {

    if (this.editData) {
      this.actionBtn = 'Update',
        this.form.controls ['id'].setValue (this.editData.id);
        this.form.controls ['idGroup'].setValue (this.editData.idGroup);
        this.form.controls ['name'].setValue (this.editData.name);
        this.form.controls ['fechaInicio'].setValue (new Date (this.editData.fechaInicio));
        this.form.controls ['fechaFin'].setValue (new Date (this.editData.fechaFin));
    }

  }

  ngOnDestroy () {
    this.susCourses.unsubscribe ();
  }

  addClassGroup():void {
  
    const group: ICommission = {
      id: this.form.value.id,
      idGroup: this.form.value.idGroup,
      idCourse: this.form.value.idCourse,
      name: this.form.value.name,
      fechaInicio: this.form.value.fechaInicio,
      fechaFin: this.form.value.fechaFin,
      subscriptions: []
    }

    if (this.editData) {
      this.classGroupService.editGroup(group);
    }
    else {
      this.classGroupService.addClassGroup(group);
    }

    this.addGroupInGrid.emit (this.form.value);
  }

}
