import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from 'src/app/models/user.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  ELEMENT_USER = this.userService.getUser ();

  displayedColumns: string[] = ['id', 'name', 'password', 'admin'];
  dataSource : MatTableDataSource<IUser>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  user!: IUser;
  users$!: Observable<IUser[]>;
  susUsers: Subscription;
  users!: Array<IUser>;


  constructor(private userService: UserService) { 

    this.users$ = this.userService.getUser();

    this.susUsers = this.users$.subscribe({
      next: (users: IUser[]) => {this.users = users},
      error: (error) => {console.error(error)},
    });
    this.dataSource = new MatTableDataSource<IUser> (this.users);

  }

  ngOnInit(): void {

  }

  ngOnDestroy () {
    this.susUsers.unsubscribe ();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

