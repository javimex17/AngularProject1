import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../services/student.service';
import { IStudent } from '../../../models/student.interface';
import { MatDialog } from '@angular/material/dialog';
import { PopUpStudentComponent } from '../pop-up-student/pop-up-student.component';
import { BehaviorSubject, interval, merge, Observable, Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ICommission } from 'src/app/models/commission.interface';
import { ClassGroupService } from 'src/app/service/commission.service';
import { StudentState } from 'src/app/models/student.state';
import { Store } from '@ngrx/store';
import { loadStudents, loadStudentsSuccess } from '../state/students.actions';
import { selectStateStudents } from '../state/students.selectors';
import { SessionService } from 'src/app/autentication/services/session.service';
import { Session } from 'src/app/autentication/models/session';


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


export class StudentComponent implements OnInit, OnDestroy {

  ELEMENT_DATA = this.studentService.getStudents ();
  displayedColumns: string[] = ['id', 'first_name', 'email', 'group', 'gender', 'actions_edit', 'actions_delete'];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];

  expandElement!: IStudent | null;  

  // dataSource : any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  session$!: Observable<Session>
  sessionSubject!: BehaviorSubject<Session>
  susSession!: Subscription;
  sessions!: Session;


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

  susStudentsStore! : Subscription;

  resultsLength = 0;

  listStudent!: IStudent[];

  dataSource: MatTableDataSource<IStudent>;
  suscription : any;
  criteria = '';

  counterObservable = interval (1000);
  counterSub : any;
  counter : number = 0;

  constructor(
    private studentService : StudentService, 
    private commissionService : ClassGroupService, 
    private dialogRef: MatDialog, private router: Router,
    private store: Store<StudentState>,
    private sessionservice: SessionService
    ) { 
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

    this.session$ = this.sessionservice.getSession();

    this.susSession = this.session$.subscribe({
      next: (sessions: Session) => {this.sessions = sessions},
      error: (error) => {console.error(error)},
    });

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
    this.store.dispatch (loadStudents());

    this.susStudentsStore = this.studentService.getStudents().subscribe ((students: IStudent[]) => {
        this.store.dispatch (loadStudentsSuccess ({students}));
    });

    this.students$ = this.store.select (selectStateStudents);


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

    this.susStudentsStore.unsubscribe ();
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
