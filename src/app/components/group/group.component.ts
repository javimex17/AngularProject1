import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GroupService } from 'src/app/service/group.service';
import { PopUpGroupComponent } from '../pop-up-group/pop-up-group.component';
import { Observable, of } from 'rxjs';
import { IGroup } from '../../models/group.interface';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent implements OnInit {
  elementData$: Observable<IGroup[]> = this.groupService.getGroups();
  dataSource!: IGroup[];

  displayedColumns: string[] = [
    'id',
    'name',
    'fechaInicio',
    'fechaFin',
    'inscripcion',
    'profesor',
    'actions_edit',
    'actions_delete',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private groupService: GroupService,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.elementData$.subscribe({
      next: (data) => this.dataSource,
    });
  }

  editDialog(row: any) {
    this.dialogRef.open(PopUpGroupComponent, {
      data: row,
    });
  }
}
