import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { GroupService } from '../../service/group.service';
import { IGroup } from '../../models/group.interface';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-group',
  templateUrl: './pop-up-group.component.html',
  styleUrls: ['./pop-up-group.component.css']
})
export class PopUpGroupComponent implements OnInit {

  actionBtn : string= "Save";

  @Output() addGroupInGrid: EventEmitter<any> = new EventEmitter<any>();


  form = this.fb.group ({
    id: ['', [Validators.required, Validators.min(0)]],
    name: ['', [Validators.required]],
   });


    constructor(  private fb: FormBuilder, 
                  private groupService: GroupService,  
                  @Inject (MAT_DIALOG_DATA) public editData: any,
                  private dialogRef : MatDialogRef<PopUpGroupComponent>) { }

  ngOnInit(): void {

    if (this.editData) {

      this.actionBtn = 'Update',

        this.form.controls ['id'].setValue (this.editData.id)
        this.form.controls ['name'].setValue (this.editData.name)
    }

  }

  addGroup():void {
  
    const group: IGroup = {
      id: this.form.value.id,
      name: this.form.value.name
    }

    if (this.editData) {
      this.groupService.editGroup(group);
    }
    else{
      this.groupService.addGroup(group);
    }

    this.addGroupInGrid.emit (this.form.value);
  }

  validateNumber(): ValidatorFn {
    return (control: AbstractControl): {[key: string]:any} | null => {
      return (Number.isInteger ( parseInt (control.value))) ? null : { errorEdad: true }

    }
  }

}
