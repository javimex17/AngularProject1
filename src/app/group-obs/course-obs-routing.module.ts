import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseObsComponent } from './components/group-obs/course-obs.component';



const routes: Routes = [
  {path: 'groups', component: CourseObsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupObsRoutingModule { }
