import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommissionCourseComponent } from './logic/commission/commission-course/class-course.component';
import { CourseComponent } from './logic/courses/course/course.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StudentComponent } from './logic/students/student/student.component';
import { AutenticationGuard } from './core/guards/autentication.guard';

const routes: Routes = [


  {
    path: 'logic',
    loadChildren: () =>
    import ('./logic/logic.module').then((logic) => logic.LogicModule),
  },

  { path: 'students', component: StudentComponent, canActivate: [AutenticationGuard]  },
  { path: 'courses', component: CourseComponent, canActivate: [AutenticationGuard]   },
  { path: 'commission', component: CommissionCourseComponent, canActivate: [AutenticationGuard] },

  { path: '', redirectTo: 'students', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
