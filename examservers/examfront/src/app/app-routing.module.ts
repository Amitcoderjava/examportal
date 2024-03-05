import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionComponent } from './pages/admin/view-quiz-question/view-quiz-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionComponent } from './pages/user/instruction/instruction.component';
import { StartComponent } from './pages/user/start/start.component';

const routes: Routes = [

{
  path : '',
  component:HomeComponent,
  pathMatch:'full'
},
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full'
},
{
  path:'signup',
  component:SignupComponent,
  pathMatch:'full'
},
{
  path:'admin',
  component: DashboardComponent,
  canActivate:[AdminGuard],
  children:[
    
    {
      path:"",
      component:WelcomeComponent,
    },
    {
      path:'profile',
      component:ProfileComponent,
    },
    {
      path:'view-categories',
      component:ViewCategoriesComponent,
    },
    {
      path:'add-category',
      component:AddCategoryComponent,
    },
    {
      path:'view-quizzes',
      component:ViewQuizzesComponent,
    },
    {
      path:'add-quiz',
      component:AddQuizComponent,
    },
    {
      path:'update-quiz/:qid',
      component:UpdateQuizComponent,
    },
    {
      path:'view-question/:qid/:title',
      component:ViewQuizQuestionComponent,
    },
    {
      path:'add-question/:qid/:title',
      component:AddQuestionComponent,
    },
  ]
},
{
  path:'userdashboard',
  component:UserdashboardComponent,
  canActivate:[NormalGuard],
  children:[
    {
      path:':cid',
      component:LoadQuizComponent
    },
  ]
},
{
  path:'instruction/:quizid',
  canActivate:[NormalGuard],
  component  : InstructionComponent,
},
{
  path:'start/:quizid',
  canActivate:[NormalGuard],
  component:StartComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
