import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentState } from 'src/app/models/student.state';

import * as fromCursos from './students.reducer';

export const selectStudentsState = createFeatureSelector<StudentState>(
  fromCursos.studentsFeatureKey
);

export const selectStateStudents = createSelector(
  selectStudentsState,
  (state: StudentState) => state.students
)

export const selectStateCargando = createSelector(
  selectStudentsState,
  (state: StudentState) => state.update
)