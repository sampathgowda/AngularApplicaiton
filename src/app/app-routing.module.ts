import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
import { ContactComponent } from './admin/contact/contact.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProjectsComponent } from './admin/projects/projects.component';

//below code to redirect to respective page when user click 
const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"about",component:AboutComponent} ,
  {path:"",redirectTo:"dashboard",pathMatch:"full"},
  {path:"contact",component:ContactComponent},
  {path:"projects",component:ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
