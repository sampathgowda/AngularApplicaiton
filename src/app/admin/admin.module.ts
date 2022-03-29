import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { DashboardService } from '../dashboard.service';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';
// //formmodule is needed to imported to bind the text boxes or u get below error 
// Error occurs in the template of component ProjectsComponent.
// src/app/admin/projects/projects.component.html:121:33 - error NG8002: Can't bind to 'ngModel' since it isn't a known property of 'input'.

@NgModule({
  declarations: [DashboardComponent,AboutComponent,ContactComponent,MyprofileComponent,ProjectsComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[DashboardComponent,AboutComponent,ContactComponent,MyprofileComponent,ProjectsComponent],
  providers:[DashboardService]
})
export class AdminModule { }
