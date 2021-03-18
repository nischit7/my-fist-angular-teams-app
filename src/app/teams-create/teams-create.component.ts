import { Component, OnInit } from '@angular/core';
import {TeamsService} from '../shared/teams/teams.service';
import { Teams } from '../shared/teams/teams.service';

@Component({
  selector: 'app-teams-create',
  templateUrl: './teams-create.component.html',
  styleUrls: ['./teams-create.component.css'],
  providers: [TeamsService]
})
export class TeamsCreateComponent {
  team: Teams = new Teams('sample', 'sample', 'sample');

  constructor(private teamsService: TeamsService) { }

  createTeam() {
    console.log(this.team);
    this.teamsService.createTeam(this.team).subscribe(
      data => {
        this.team = data;
      },
      error => console.log(error)
    );
  }
}
