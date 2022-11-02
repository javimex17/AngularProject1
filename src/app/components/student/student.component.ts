import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { IStudent } from '../../models/student.interface';
import { MatDialog } from '@angular/material/dialog';
import { PopUpStudentComponent } from '../pop-up-student/pop-up-student.component';
import { from, interval, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

//  <button mat-raised-button>Basic</button>

export class StudentComponent implements OnInit {

  ELEMENT_DATA = this.studentService.getStudents ();
  displayedColumns: string[] = ['id', 'avatar', 'first_name', 'email', 'group', 'gender', 'actions_edit', 'actions_delete'];
  dataSource = new MatTableDataSource (this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  criteria = '';

  counterObservable = interval (1000);
  counterSub : any;
  counter : number = 0;

  constructor(private studentService : StudentService, private dialogRef: MatDialog) { 
  }
  //dataSource = this.contactService.getContacts ();

  ngOnInit(): void {

    this.counterSub = this.counterObservable.subscribe ((value) => {
      this.counter = value;
    })

    of (this.ELEMENT_DATA)
      interval (2000).pipe (
        map( (i) => i)
      ).subscribe()

      of (this.ELEMENT_DATA)
      mergeMap(
        (ELEMENT_DATA: IStudent[]) => from (this.ELEMENT_DATA).pipe(
          map (
            (curso: IStudent) => ELEMENT_DATA.filter (c => c.first_name === curso.first_name)
          )
        )
      )
  }

  openDialog () {
    let ref= this.dialogRef.open(PopUpStudentComponent)
    ref.afterClosed().toPromise().then(()=> {
      this.ngAfterViewInit();
    });
  }

  editDialog (row: any){
    this.dialogRef.open (PopUpStudentComponent,
      {
        data: row
      })
  } 

  ngAfterViewInit () {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteStudent (index: number) {
    this.studentService.deleteStudent(index);
    this.ngAfterViewInit();
  }

  addGrid ($event: any): void {
    this.ngAfterViewInit();
  }

  lengthStudent () : number {
    return this.studentService.lengthContact ();
  }

  totalStudents = new Promise ((resolve, reject) => {
    setTimeout( () => {
      resolve (this.studentService.lengthContact());
    }, 2000);
  });

  unsubscribe () {
    this.counterSub.unsubscribe ();
  }

}
