import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupObsComponent } from './components/group-obs/group-obs.component';

const routes: Routes = [
  {path: 'groups', component: GroupObsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupObsRoutingModule { }
