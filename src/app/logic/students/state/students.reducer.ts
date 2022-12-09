import { Action, createReducer, on } from '@ngrx/store';

import {StudentState} from 'src/app/models/student.state';

import * as StudentsActions from './students.actions';

export const studentsFeatureKey = 'students';

export const estadoInicial: StudentState = {
  update: false,
  students: []
};

export const reducer = createReducer(
  estadoInicial,
  on(StudentsActions.loadStudents, (state) => {
    return {...state, cargando: true 
    }
  }),
  on(StudentsActions.loadStudentsSuccess, (state, {students}) => {
    return {...state, cargando: false, students}
  }),
  on(StudentsActions.loadStudentsFailure, (state, {error}) => {
    return state
  }),

);
