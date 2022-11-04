import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StudentComponent } from './logic/students/student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopUpStudentComponent } from './logic/students/pop-up-student/pop-up-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectStudentsComponent } from './components/project-students/project-students.component';
import { CourseComponent } from './logic/courses/course/course.component';
import { CommissionCourseComponent } from './logic/commission/commission-course/class-course.component';
import { PopUpCourse } from './logic/courses/pop-up-course/pop-up-course.component';
import { PopUpCommissionComponent } from './logic/commission/pop-up-commission/pop-up-commission.component';
import { FilterNamePipe } from './pipes/filter-name.pipe';
import { TableGroupComponent } from './components/table-group/table-group.component';
import { CardsCourseComponent } from './components/cards-course/cards-course.component';
import { BoolenToTextPipe } from './pipes/boolen-to-text.pipe';
import { CategoryPipePipe } from './pipes/category-pipe.pipe';
import { AutenticationModule } from './autentication/autentication.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GroupObsModule } from './group-obs/course-obs.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentComponent,
    PopUpStudentComponent,
    ProjectStudentsComponent,
    CourseComponent,
    CommissionCourseComponent,
    PopUpCourse,
    PopUpCommissionComponent,
    FilterNamePipe,
    TableGroupComponent,
    CardsCourseComponent,
    BoolenToTextPipe,
    CategoryPipePipe,
    PageNotFoundComponent
  ],
  imports: [
    CoreModule,
    AutenticationModule,
    GroupObsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  exports: [

    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
