import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupObsRoutingModule } from './course-obs-routing.module';
import { CourseObsComponent } from './components/group-obs/course-obs.component';
import { CourseObsService } from './services/group-obs.service';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CourseObsComponent
  ],
  imports: [
    CommonModule,
    GroupObsRoutingModule,
    MatCardModule
  ],
  providers: [
    CourseObsService
  ]
})
export class GroupObsModule { }
