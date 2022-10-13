import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClassGroupService } from 'src/app/service/class-group.service';
import { PopUpClassGroupComponent } from '../pop-up-class-group/pop-up-class-group.component';

@Component({
  selector: 'app-class-group',
  templateUrl: './class-group.component.html',
  styleUrls: ['./class-group.component.css']
})
export class ClassGroupComponent implements OnInit {

  ELEMENT_DATA = this.classGroupService.getClassGroups ();
  displayedColumns: string[] = ['id', 'name','actions_edit', 'actions_delete'];
  dataSource = new MatTableDataSource (this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private classGroupService : ClassGroupService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

  editDialog (row: any){
    this.dialogRef.open (PopUpClassGroupComponent,
      {
        data: row
      }
      
      )
  } 

  openDialog () {
    let ref= this.dialogRef.open(PopUpClassGroupComponent)
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
