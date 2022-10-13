import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-cards-group',
  templateUrl: './cards-group.component.html',
  styleUrls: ['./cards-group.component.css']
})
export class CardsGroupComponent implements OnInit {


  ELEMENT_DATA = this.groupService.getGroups ();


  constructor(private groupService : GroupService) { }

  ngOnInit(): void {
  }

}
