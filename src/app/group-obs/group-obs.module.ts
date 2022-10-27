import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupObsRoutingModule } from './group-obs-routing.module';
import { GroupObsComponent } from './components/group-obs/group-obs.component';
import { GroupObsService } from './services/group-obs.service';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    GroupObsComponent
  ],
  imports: [
    CommonModule,
    GroupObsRoutingModule,
    MatCardModule
  ],
  providers: [
    GroupObsService
  ]
})
export class GroupObsModule { }
