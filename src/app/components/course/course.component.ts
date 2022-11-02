import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { CourseService } from 'src/app/service/course.service';
import { PopUpCourse } from '../pop-up-course/pop-up-course.component';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {

  ELEMENT_DATA = this.courseService.getCourse ();
  displayedColumns: string[] = ['id', 'name', 'profesor','inscripcion',  'actions_edit', 'actions_delete'];
  dataSource = new MatTableDataSource (this.ELEMENT_DATA)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private courseService: CourseService, private dialogRef: MatDialog) { }

  ngOnInit(): void {

  }

  editDialog(row: any) {
    this.dialogRef.open(PopUpCourse, { data: row })
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
