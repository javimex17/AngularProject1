import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommissionCourseComponent } from './components/commission-course/class-course.component';
import { CourseComponent } from './components/course/course.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'commission', component: CommissionCourseComponent },

  { path: '', redirectTo: 'students', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
