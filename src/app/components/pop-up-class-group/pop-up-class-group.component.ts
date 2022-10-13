import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IClassGroup } from 'src/app/models/classGroup.interface';
import { ClassGroupService } from 'src/app/service/class-group.service';

@Component({
  selector: 'app-pop-up-class-group',
  templateUrl: './pop-up-class-group.component.html',
  styleUrls: ['./pop-up-class-group.component.css']
})
export class PopUpClassGroupComponent implements OnInit {


  @Output() addGroupInGrid: EventEmitter<any> = new EventEmitter<any>();


  form = this.fb.group ({
    id: ['', [Validators.required, Validators.min(0)]],
    idGroup: ['', [Validators.required, Validators.min(0)]],
    name: ['', [Validators.required]],
   });


  constructor(private fb: FormBuilder, private classGroupService: ClassGroupService) { }

  ngOnInit(): void {
  }

  addClassGroup():void {
  
    const group: IClassGroup = {
      id: this.form.value.id,
      idGroup: this.form.value.idGroup,
      name: this.form.value.name
    }

    this.classGroupService.addClassGroup(group);
    this.addGroupInGrid.emit (this.form.value);
  }

}
