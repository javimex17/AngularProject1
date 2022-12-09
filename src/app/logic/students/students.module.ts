import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducer, studentsFeatureKey } from './state/students.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    StoreModule.forFeature (studentsFeatureKey, reducer)
  ]
})
export class StudentsModule { }
