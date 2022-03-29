import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getteamMembersSummary():any[]{


  
    var TeamMembersSummary=[

      {Region:"East",Count:20,unavialableMember:5},
      {Region:"West",Count:30,unavialableMember:6},
      {Region:"South",Count:30,unavialableMember:7},
      {Region:"North",Count:30,unavialableMember:8},
      {Region:"East",Count:30,unavialableMember:9},
      {Region:"West",Count:40,unavialableMember:10},
      {Region:"South",Count:40,unavialableMember:11},
      {Region:"North",Count:50,unavialableMember:12},
      {Region:"South",Count:50,unavialableMember:13},
      {Region:"North",Count:50,unavialableMember:13},
      {Region:"East",Count:50,unavialableMember:53}
    
      ];
      return TeamMembersSummary;
  }


}
