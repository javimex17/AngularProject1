import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../services/student.service';
import { IStudent } from '../../../models/student.interface';
import { MatDialog } from '@angular/material/dialog';
import { PopUpStudentComponent } from '../pop-up-student/pop-up-student.component';
import { interval, merge, Observable, Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { startWith, switchMap } from 'rxjs/operators';

import {animate, state, style, transition, trigger} from '@angular/animations';
import { ICommission } from 'src/app/models/commission.interface';
import { ClassGroupService } from 'src/app/service/commission.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  styleUrls: ['./student.component.css']
})


export class StudentComponent implements OnInit {

  ELEMENT_DATA = this.studentService.getStudents ();
  displayedColumns: string[] = ['id', 'first_name', 'email', 'group', 'gender', 'actions_edit', 'actions_delete'];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];

  expandElement!: IStudent | null;  

  // dataSource : any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  student!: IStudent;
  students$!: Observable<IStudent[]>;
  students!: Array<IStudent>;
  susStudents: Subscription;
  isLoadingResults = true;
  pagina: number = 0;

  commission!: ICommission;
  commissions$!: Observable<ICommission[]>;
  commissions!: Array<ICommission>;
  susCommission: Subscription;

  resultsLength = 0;

  listStudent!: IStudent[];

  dataSource: MatTableDataSource<IStudent>;
  suscription : any;
  criteria = '';

  counterObservable = interval (1000);
  counterSub : any;
  counter : number = 0;

  constructor(private studentService : StudentService, private commissionService : ClassGroupService, private dialogRef: MatDialog, private router: Router) { 
    this.students$ = this.studentService.getStudents();

    //this.getDataHttp();

    this.susStudents = this.students$.subscribe({
      next: (students: IStudent[]) => {this.students = students},
      error: (error) => {console.error(error)},
    });

    
    this.dataSource = new MatTableDataSource<IStudent> (this.students);

    // Me traigo las comisiones del servicio
    this.commissions$ = this.commissionService.getCommission();

    this.susCommission = this.commissions$.subscribe({
      next: (commissions: ICommission[]) => {this.commissions = commissions},
      error: (error) => {console.error(error)},
    });


  }

  ngOnInit(): void {

    this.students$ = this.studentService.getStudents();
    this.suscription = this.students$.subscribe({
      next: (estudiantes: IStudent[]) => {
        this.students = estudiantes;
        this.dataSource.data = this.students;
      },
      error: (error) => {
        console.error(error);
      },
    });

    this.resultsLength = this.dataSource.data.length;


    }

    getLocalService ( idStudent: number, idCommission : number) {

    //  alert ("element"+id);

      const studentID = this.studentService.getStudentCommissionLocalId (idStudent, idCommission);




      

    }


/*
  getDataHttp () {
    this.studentService.getStudents().subscribe (data=> {
      this.listStudent = data
   // this.dataSource = new MatTableDataSource(this.listStudent)
    })

  }
*/
  ngOnDestroy () {
    this.susStudents.unsubscribe ();
  }

  openDialog () {
    let ref= this.dialogRef.open(PopUpStudentComponent)
    ref.afterClosed().toPromise().then(()=> {
      this.ngAfterViewInit();
    });
  }

  editDialog (id: number){
/*
    this.router.navigate (['logic/students/edit', {id: id}])
    this.dialogRef.open (PopUpStudentComponent,
      {
        data: row
      })

      */
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
    this.students$ = this.studentService.getStudents();
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
