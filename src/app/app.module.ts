import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { AdminComponent } from './admin/admin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchComponent } from './search/search.component';

import { TreeModule } from 'angular2-tree-component';
import { QuizComponent } from './quiz/quiz.component';

const appRoutes: Routes = [
  { path: 'login-view', component: LoginComponent },
  { path: 'dashboard-view', component: DashboardComponent },
  { path: 'profile-view', component: ProfileComponent },
  { path: 'course-view', component: CourseComponent },
  { path: 'courses-view', component: CoursesComponent },
  { path: 'admin-view', component: AdminComponent },
  { path: 'quiz-view', component: QuizComponent },
  { path: '',   redirectTo: '/login-view', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
  { path: 'notfound-view', component: NotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    CourseComponent,
    CoursesComponent,
    AdminComponent,
    QuizComponent,
    NotfoundComponent,
    SearchComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
