import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:Project [];
  newProject:Project = new Project();
  editProject :Project = new Project();
  editIndex:number=null;
  deletePorject :Project = new Project();
  deleteIndex:number=null;
  searchBy :string="ProjectName";
  searchtxt:string="";


  constructor(private projectSerice :ProjectsService) { }

  ngOnInit(): void {

    this.projectSerice.currencyExchnage().subscribe(
        // Below code is for reading response and assign to project array
      (response :Project[]) => {
        this.projects=response;
      }
    )
  }

  onSaveClick()
  {
    this.projectSerice.insertProject(this.newProject).subscribe((response) =>{
      //Add porject to Grid
      //It is always good to create a object of model class and psuh data
      var p :Project = new Project();
      p.projectID= response.projectID;
      p.dateOfStart=response.dateOfStart;
      p.projectName=response.projectName;
      p.teamSize=response.teamSize;
      this.projects.push(p);
      //Clear new project dialog -Text boxes 
      
      this.newProject.projectID=null;
      this.newProject.dateOfStart=null;
      this.newProject.projectName=null;
      this.newProject.teamSize=null;

    },(error) => {
      console.log(error);

    } );
    }

    onEditClick(event ,index :number){

      this.editProject.projectID=this.projects[index].projectID;
      this.editProject.projectName= this.projects[index].projectName;
      this.editProject.teamSize= this.projects[index].teamSize;
      this.editProject.dateOfStart= this.projects[index].dateOfStart;
      this.editIndex=index; // Assing the current index when they clic on edit 
    
    
    }

    onUpdateClick(){

    this.projectSerice.updateProject(this.editProject).subscribe( (response:Project) => 
    {
      var p : Project = new Project();
      p.projectID= response.projectID;
      p.dateOfStart= response.dateOfStart;
      p.projectName= response.projectName;
      p.teamSize=response.teamSize;
      this.projects[this.editIndex]=p; // this line of code will assign the newly created porject to speicfic index
    
      this.editProject.projectID=null;
      this.editProject.projectName=null;
      this.editProject.dateOfStart=null;
      this.editProject.teamSize=null;

    },
    
    (error) => {
      console.log(error);

    })

    }
    onDeleteClick(event , index:number){

      this.deleteIndex=index;
      this.deletePorject.projectID=this.projects[index].projectID;
      this.deletePorject.projectName= this.projects[index].projectName;
      this.deletePorject.teamSize= this.projects[index].teamSize;
      this.deletePorject.dateOfStart= this.projects[index].dateOfStart;
     
    


    }

    onDeleteConfirm (){

      this.projectSerice.deleteProject(this.deletePorject.projectID).subscribe(
        (result) => { this.projects.splice(this.deleteIndex,1);
        //Below 4 lines is to clear the UI 
          this.deletePorject.projectID=null;
        this.deletePorject.projectName=null;
        this.deletePorject.teamSize= null;
        this.deletePorject.dateOfStart=null;
        },
        (error) => {
          console.log(error)

        },

      )

    }
    onSearchClick(){

      this.projectSerice.serachProjects(this.searchBy,this.searchtxt).subscribe( (response:Project[]) =>{
        this.projects=response;


      },(error) => {console.log(error)})

    }



  }
