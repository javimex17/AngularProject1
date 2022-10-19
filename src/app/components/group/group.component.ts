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
  styleUrls: ['./group.component.css']
})

export class GroupComponent implements OnInit {

  elementData$!: Observable<IGroup[]> 
  ELEMENT_DATA = this.groupService.getGroups ();
  
  displayedColumns: string[] = ['id', 'name', 'fechaInicio', 'fechaFin', 'inscripcion', 'profesor', 'actions_edit', 'actions_delete'];
  dataSource = of(this.ELEMENT_DATA).pipe(delay (1000));



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private groupService : GroupService, private dialogRef: MatDialog) { }

  ngOnInit(): void {

   this.elementData$ = this.groupService.getGroups ();

  }

  openDialog () {
    let ref= this.dialogRef.open(PopUpGroupComponent)
    ref.afterClosed().toPromise().then(()=> {
      this.ngAfterViewInit();
    });
  }

  editDialog (row: any){
    this.dialogRef.open (PopUpGroupComponent,
      {
        data: row
      }
      
      )

  } 


  
  ngAfterViewInit () {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteGroup (index: number) {
    this.groupService.deleteGroup (index);
    this.ngAfterViewInit();
  }

  addGrid ($event: any): void {
    this.ngAfterViewInit();
  }

}
