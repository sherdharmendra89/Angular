import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { CollegeComponent } from './college/college.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { DocumentComponent } from './document/document.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginComponent } from './login/login.component';
import { MarksheetListComponent } from './marksheet-list/marksheet-list.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MenuComponent } from './menu/menu.component';
import { MeritlistComponent } from './merit-list/merit-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleComponent } from './role/role.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableListComponent } from './timetable-list/timetable-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path :'',redirectTo:'login',pathMatch:'full'},
  { path : 'login', component:LoginComponent},
  { path:'sessionOut', component:LoginComponent },
  { path : 'menu', component:MenuComponent},
  { path : 'logout', component:MenuComponent},
  { path : 'welcome', component:WelcomeComponent},
  { path : 'role', component:RoleComponent},
  { path:'role/:id', component:RoleComponent },
  { path:'rolelist', component:RoleListComponent },
  { path:'registration', component:RegistrationComponent },
  { path:'user', component:UserComponent },
  { path:'user/:id', component:UserComponent },
  { path:'userlist', component:UserListComponent },
  { path:'course', component:CourseComponent },
  { path:'course/:id', component:CourseComponent },
  { path:'courselist', component:CourseListComponent },
  { path:'college', component:CollegeComponent },
  { path:'college/:id', component:CollegeComponent },
  { path:'collegelist', component:CollegeListComponent },
  { path:'student', component:StudentComponent },
  { path:'student/:id', component:StudentComponent },
  { path:'studentlist', component:StudentListComponent },
  { path:'addfaculty', component:FacultyComponent },
  { path:'addfaculty/:id', component:FacultyComponent },
  { path:'addfacultylist', component:FacultyListComponent },
  { path:'timetable', component:TimetableComponent },
  { path:'timetable/:id', component:TimetableComponent },
  { path:'timetablelist', component:TimetableListComponent },
  { path:'subject', component:SubjectComponent },
  { path:'subject/:id', component:SubjectComponent },
  { path:'subjectlist', component:SubjectListComponent },
  { path:'marksheet', component:MarksheetComponent },
  { path:'marksheet/:id', component:MarksheetComponent },
  { path:'marksheetlist', component:MarksheetListComponent },
  { path:'meritlist', component:MeritlistComponent },
  { path:'forgetpassword', component:ForgetpasswordComponent },
  { path:'changepassword', component:ChangepasswordComponent },
  { path:'**', component:DocumentComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
