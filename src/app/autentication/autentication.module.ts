import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AutenticationRoutingModule } from './autentication-routing.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutenticationRoutingModule,
    CoreModule
  ]
})
export class AutenticationModule { }
