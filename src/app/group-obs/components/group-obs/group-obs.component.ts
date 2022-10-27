import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGroup } from 'src/app/models/group.interface';
import { GroupObsService } from '../../services/group-obs.service';

@Component({
  selector: 'app-group-obs',
  templateUrl: './group-obs.component.html',
  styleUrls: ['./group-obs.component.css']
})
export class GroupObsComponent implements OnInit {
  group$!: Observable<IGroup[]>

  
  constructor( private group: GroupObsService) { }

  ngOnInit(): void {
    this.group$ = this.group.getGroups();
  }

}
