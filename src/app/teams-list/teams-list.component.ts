import { Component, OnInit } from '@angular/core';
import {TeamsService} from '../shared/teams/teams.service';
import {Teams} from '../shared/teams/teams.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css'],
  providers: [TeamsService]
})
export class TeamsListComponent implements OnInit {
  teams: Array<Teams>;

  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
    this.teamsService.getAll().subscribe(
      data => {
        this.teams = data;
      },
      error => console.log(error)
    );
  }
}
