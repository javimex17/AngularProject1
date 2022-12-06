import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICommission } from 'src/app/models/commission.interface';
import { ClassGroupService } from 'src/app/service/commission.service';

@Component({
  selector: 'app-pop-up-commission',
  templateUrl: './pop-up-commission.component.html',
  styleUrls: ['./pop-up-commission.component.css']
})
export class PopUpCommissionComponent implements OnInit {
  
  actionBtn : string= "Save";

  @Output() addGroupInGrid: EventEmitter<any> = new EventEmitter<any>();

  form = this.fb.group ({
    id: ['', [Validators.required, Validators.min(0)]],
    idGroup: ['', [Validators.required, Validators.min(0)]],
    name: ['', [Validators.required]],
    fechaInicio: [''],
    fechaFin: [''],
   });



  constructor(private fb: FormBuilder, 
              private classGroupService: ClassGroupService,
              @Inject (MAT_DIALOG_DATA) public editData: any,
                  private dialogRef : MatDialogRef<PopUpCommissionComponent>
              ) { }

  ngOnInit(): void {


    if (this.editData) {

      this.actionBtn = 'Update',

        this.form.controls ['id'].setValue (this.editData.id);
        this.form.controls ['idGroup'].setValue (this.editData.idGroup);
        this.form.controls ['name'].setValue (this.editData.name);
        this.form.controls ['fechaInicio'].setValue ((this.editData.fechaInicio));
        this.form.controls ['fechaFin'].setValue (new Date (this.editData.fechaFin));

    }

  }

  addClassGroup():void {
  
    const group: ICommission = {
      id: this.form.value.id,
      idGroup: this.form.value.idGroup,
      name: this.form.value.name,
      fechaInicio: this.form.value.fechaInicio,
      fechaFin: this.form.value.fechaFin
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
