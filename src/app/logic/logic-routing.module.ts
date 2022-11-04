import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', children:[
    {path: 'students', loadChildren:() => import ('./students/students.module').then(m => m.StudentsModule)},
    {path: 'courses', loadChildren:() => import ('./courses/courses.module').then(m => m.CoursesModule)},
    {path: 'commission', loadChildren:() => import ('./commission/commission.module').then(m => m.CommissionModule) },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogicRoutingModule { }
