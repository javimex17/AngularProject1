import { createAction, props } from '@ngrx/store';
import { IStudent } from 'src/app/models/student.interface'


export const loadStudents = createAction(
  '[Students] Load Students'
);

export const loadStudentsSuccess = createAction(
  '[Students] Load Students Success',
  props<{ students: IStudent[] }>()
);

export const loadStudentsFailure = createAction(
  '[students] Load Students Failure',
  props<{ error: any }>()
);
