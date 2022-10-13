import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-table-group',
  templateUrl: './table-group.component.html',
  styleUrls: ['./table-group.component.css']
})
export class TableGroupComponent implements OnInit {


  ELEMENT_DATA = this.groupService.getGroups ();


  constructor(private groupService : GroupService) { }

  ngOnInit(): void {
  }

  filtrarCurso () {
    
  }


}
