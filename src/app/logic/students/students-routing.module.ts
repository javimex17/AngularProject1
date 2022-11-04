import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { PopUpStudentComponent } from './pop-up-student/pop-up-student.component';

const routes: Routes = [
  {path: '', component: StudentComponent, children: [
    {path: '', component: StudentComponent},
    {path: 'add', component: PopUpStudentComponent},
    {path: 'edit', component: PopUpStudentComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
