import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { PopUpStudentComponent } from './pop-up-student/pop-up-student.component';
import { AutenticationGuard } from 'src/app/core/guards/autentication.guard';
import { AdminGuardGuard } from 'src/app/core/guards/admin-guard.guard';

const routes: Routes = [
  {path: '', component: StudentComponent, children: [
    {path: '', component: StudentComponent},
    {path: 'add', component: PopUpStudentComponent, canActivate: [AutenticationGuard, AdminGuardGuard]},
    {path: 'edit', component: PopUpStudentComponent, canActivate: [AutenticationGuard, AdminGuardGuard]}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
