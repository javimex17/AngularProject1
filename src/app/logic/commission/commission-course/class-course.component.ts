import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { ICommission } from 'src/app/models/commission.interface';
import { ClassGroupService } from 'src/app/service/commission.service';

import { PopUpCommissionComponent } from '../pop-up-commission/pop-up-commission.component';
@Component({
  selector: 'app-class-course',
  templateUrl: './class-course.component.html',
  styleUrls: ['./class-course.component.css']
})
export class CommissionCourseComponent implements OnInit {

  ELEMENT_DATA = this.commissionService.getCommission ();
  displayedColumns: string[] = ['id', 'idGroup', 'name', 'fechaInicio','fechaFin', 'actions_edit', 'actions_delete'];
  dataSource : MatTableDataSource <ICommission>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  commission!: ICommission;
  commissions$!: Observable<ICommission[]>;
  commissions!: Array<ICommission>;
  susCommission: Subscription;


  constructor(private commissionService : ClassGroupService, private dialogRef: MatDialog) {

    this.commissions$ = this.commissionService.getCommission();

    this.susCommission = this.commissions$.subscribe({
      next: (commissions: ICommission[]) => {this.commissions = commissions},
      error: (error) => {console.error(error)},
    });
    this.dataSource = new MatTableDataSource<ICommission> (this.commissions);

   }

  ngOnInit(): void {
  }


  ngOnDestroy () {
    this.susCommission.unsubscribe ();
  }

  editDialog (row: any){
    let ref = this.dialogRef.open(PopUpCommissionComponent, { data: row })
    ref.afterClosed().toPromise().then(() => {
       this.ngAfterViewInit();
    });
  } 

  openDialog() {
    let ref = this.dialogRef.open(PopUpCommissionComponent)
    ref.afterClosed().toPromise().then(() => {
    this.ngAfterViewInit();
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteCommission (index: number) {
    this.commissionService.deleteCommission (index);
    this.ngAfterViewInit();
  }

  addGrid ($event: any): void {
    this.ngAfterViewInit();
  }

}