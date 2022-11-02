import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClassGroupService } from 'src/app/service/commission.service';

import { PopUpCommissionComponent } from '../pop-up-commission/pop-up-commission.component';
@Component({
  selector: 'app-class-course',
  templateUrl: './class-course.component.html',
  styleUrls: ['./class-course.component.css']
})
export class CommissionCourseComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  ELEMENT_DATA = this.classGroupService.getClassGroups ();
  displayedColumns: string[] = ['id', 'name', 'fechaInicio', 'fechaFin', 'actions_edit', 'actions_delete'];
  dataSource = new MatTableDataSource (this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private classGroupService : ClassGroupService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

  editDialog (row: any){
    this.dialogRef.open (PopUpCommissionComponent,
      {
        data: row
      }
      
      )
  } 

  openDialog () {
    let ref= this.dialogRef.open(PopUpCommissionComponent)
    ref.afterClosed().toPromise().then(()=> {
      this.ngAfterViewInit();
    });
  }

  ngAfterViewInit () {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteClassGroup (index: number) {
    this.classGroupService.deleteClassGroup (index);
    this.ngAfterViewInit();
  }

  addGrid ($event: any): void {
    this.ngAfterViewInit();
  }

}
