import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { Session } from '../../models/session';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private session: SessionService, private router: Router) { 

    this.form = new FormGroup (
      {
        user: new FormControl ('administrador'),
        password: new FormControl ('123456'),
        admin: new FormControl(true)
      }
    )

  }

  ngOnInit(): void {



  }

  login () {

    this.session.login (this.form.value.user, this.form.value.password, this.form.value.admin);
    this.router.navigate(['students']);

  }



}
