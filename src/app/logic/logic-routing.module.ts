import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {path:'', children:[
    {path: 'students', loadChildren:() => import ('./students/students.module').then(m => m.StudentsModule)},
    {path: 'courses', loadChildren:() => import ('./courses/courses.module').then(m => m.CoursesModule)},
    {path: 'commission', loadChildren:() => import ('./commission/commission.module').then(m => m.CommissionModule) },
    {path: 'home', loadChildren:() => import ('./home/home.module').then(m => m.HomeModule) },
    {path: 'users', loadChildren:() => import ('./users/users.module').then(m => m.UsersModule)},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogicRoutingModule { }
