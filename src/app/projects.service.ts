import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient :HttpClient) { }

currencyExchnage():Observable<Project[]>{
 return this.httpClient.get<Project[]>("/request/listProject",{responseType:"json"});

} 
  insertProject(newProject :Project):Observable<Project>{

    return this.httpClient.post<Project>("/request/listProject",newProject,{responseType:"json"});

  }


  updateProject(editProject :Project):Observable<Project>{

    return this.httpClient.put<Project>("/request/listProject",editProject ,{responseType:"json"});

  }
  deleteProject(projectID :number):Observable<string>{

    return this.httpClient.delete<string>("/request/listProject?ProjectID=" + projectID);

  }

  serachProjects(searchBy :string,searchtxt :string):Observable<Project[]>{

    return this.httpClient.get<Project[]>("/request/listProject/" +searchBy+ "/" + searchtxt,{responseType:"json"});
  }


}
