import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { CourseService } from 'src/app/service/course.service';
import { PopUpCourse } from '../pop-up-course/pop-up-course.component';
import { ICourse } from '../../../models/course.interface';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { Session } from 'src/app/autentication/models/session';
import { SessionService } from 'src/app/autentication/services/session.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {

  ELEMENT_DATA = this.courseService.getCourse ();

  displayedColumns: string[] = ['id', 'name', 'profesor','inscripcion',  'actions_edit', 'actions_delete'];
  dataSource : MatTableDataSource<ICourse>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  session$!: Observable<Session>
  sessionSubject!: BehaviorSubject<Session>
  susSession!: Subscription;
  sessions!: Session;


  course!: ICourse;
  courses$!: Observable<ICourse[]>;
  courses!: Array<ICourse>;
  susCourses: Subscription;

  constructor(private courseService: CourseService, private dialogRef: MatDialog, private sessionservice: SessionService) {

    this.courses$ = this.courseService.getCourse();

    this.susCourses = this.courses$.subscribe({
      next: (courses: ICourse[]) => {this.courses = courses},
      error: (error) => {console.error(error)},
    });
    this.dataSource = new MatTableDataSource<ICourse> (this.courses);
   }

  ngOnInit(): void {

    this.session$ = this.sessionservice.getSession();

    this.susSession = this.session$.subscribe({
      next: (sessions: Session) => {this.sessions = sessions},
      error: (error) => {console.error(error)},
    });

  }


  ngOnDestroy () {
    this.susCourses.unsubscribe ();
  }

  editDialog(row: any) {

    let ref = this.dialogRef.open(PopUpCourse, { data: row })
    ref.afterClosed().toPromise().then(() => {
       this.ngAfterViewInit();
    });

  }

  openDialog() {
    let ref = this.dialogRef.open(PopUpCourse)
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

  deleteGroup(index: number) {
    this.courseService.deleteCourse(index);
    this.ngAfterViewInit();
  }

  addGrid($event: any): void {
    this.ngAfterViewInit();
  }

}
