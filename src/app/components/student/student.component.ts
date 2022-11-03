import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { IStudent } from '../../models/student.interface';
import { MatDialog } from '@angular/material/dialog';
import { PopUpStudentComponent } from '../pop-up-student/pop-up-student.component';
import { interval, Observable, Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})


export class StudentComponent implements OnInit {

  ELEMENT_DATA = this.studentService.getStudents ();


  displayedColumns: string[] = ['id', 'avatar', 'first_name', 'email', 'group', 'gender', 'actions_edit', 'actions_delete'];
  dataSource : MatTableDataSource <IStudent>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  student!: IStudent;
  students$!: Observable<IStudent[]>;
  students!: Array<IStudent>;
  susStudents: Subscription;


  criteria = '';

  counterObservable = interval (1000);
  counterSub : any;
  counter : number = 0;

  constructor(private studentService : StudentService, private dialogRef: MatDialog) { 
    this.students$ = this.studentService.getStudents();

    this.susStudents = this.students$.subscribe({
      next: (students: IStudent[]) => {this.students = students},
      error: (error) => {console.error(error)},
    });
    this.dataSource = new MatTableDataSource<IStudent> (this.students);

  }

  ngOnInit(): void {  }

  ngOnDestroy () {
    this.susStudents.unsubscribe ();
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

}
