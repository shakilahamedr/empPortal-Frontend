import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateComponent } from './components/update/update.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [

  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: "register",
    component: RegisterComponent,
    pathMatch: 'full'
  },
  // {
  //   path: "dashboard/:id",
  //   component: DashboardComponent,
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: "update/:id",
  //   component: UpdateComponent,
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard]
  // },

  //
  {
    path: "dashboard",
    component: DashboardComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: "update",
    component: UpdateComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }
  //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
