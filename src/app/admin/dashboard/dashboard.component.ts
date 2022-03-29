import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  
  Designation :string;
  UserName : string;
  NoOfTeamMembers : number;
  TotalCostOfAllProject : number;
  PendingTask:number;
  UpcomingProjects: number;
  ProjectCost:number;
  CurrentExpenditure :number;
  AvailableFunds:number;
  Clients:string[];
  Years:number[]=[];
  TeamMembersSummary=[];
  TeamMembers=[];
  CurrentDate :Date;

  constructor(private dashboardservice: DashboardService ){

  }

  ngOnInit()  {
    this.Designation= "Team Leader";
    this.UserName="John Smith";
    this.NoOfTeamMembers=30;
    this.TotalCostOfAllProject=1000;
    this.PendingTask=10;
    this.UpcomingProjects=0.2;
    this.ProjectCost=2000;
    this.CurrentExpenditure=200;
    this.AvailableFunds=3000;
    this.Clients = ["ABC Software solution","IBM Corporation","AT&T Corporation"];
    this.CurrentDate = new Date();
    for(var i=2019;i >= 2010;i--)
    this.Years.push();
  //below code is commented since service layer class is created wth getTeamMembersSummary() method 
  
    // this.TeamMembersSummary=[

    //   {Region:"East",Count:20,unavialableMember:5},
    //   {Region:"West",Count:30,unavialableMember:6},
    //   {Region:"South",Count:30,unavialableMember:7},
    //   {Region:"North",Count:30,unavialableMember:8},
    //   {Region:"East",Count:30,unavialableMember:9},
    //   {Region:"West",Count:40,unavialableMember:10},
    //   {Region:"South",Count:40,unavialableMember:11},
    //   {Region:"North",Count:50,unavialableMember:12},
    //   {Region:"South",Count:50,unavialableMember:13},
    //   {Region:"North",Count:50,unavialableMember:13},
    //   {Region:"East",Count:50,unavialableMember:53}
    
    //   ];
  
    this.TeamMembersSummary=this.dashboardservice.getteamMembersSummary();

      this.TeamMembers=[
        
       {Region:"North" ,Members:[
        {ID:"1",Name:"Ford",Status:"Avialble"},
        {ID:"1",Name:"Ford",Status:"Avia lble"},
       {ID:"1",Name:"Ford",Status: "Busy"},
        {ID:"1",Name:"Ford",Status:"Busy"}
      ],
      
     },
     {Region:"West" ,Members:[
      {ID:"1",Name:"Ford",Status:"Avialble"},
      {ID:"1",Name:"Ford",Status:"Avialble"},
      {ID:"1",Name:"Ford",Status:"Busy"},
      {ID:"1",Name:"Ford",Status:"Busy"}
    ],
    
   },

   {Region:"South" ,Members:[
    {ID:"1",Name:"Ford",Status:"Avialble"},
    {ID:"1",Name:"Ford",Status:"Avialble"},
    {ID:"1",Name:"Ford",Status:"Busy"},
    {ID:"1",Name:"Ford",Status:"Busy"}
  ],
  
 }
     ]

  }


}
