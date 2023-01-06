import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TimetableListComponent } from './timetable-list/timetable-list.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetListComponent } from './marksheet-list/marksheet-list.component';
import { MeritlistComponent } from './merit-list/merit-list.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DocumentComponent } from './document/document.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    WelcomeComponent,
    RoleComponent,
    RoleListComponent,
    UserComponent,
    UserListComponent,
    RegistrationComponent,
    CourseComponent,
    CourseListComponent,
    CollegeComponent,
    CollegeListComponent,
    StudentComponent,
    StudentListComponent,
    FacultyComponent,
    FacultyListComponent,
    TimetableComponent,
    TimetableListComponent,
    SubjectComponent,
    SubjectListComponent,
    MarksheetComponent,
    MarksheetListComponent,
    MeritlistComponent,
    ChangepasswordComponent,
    ForgetpasswordComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
