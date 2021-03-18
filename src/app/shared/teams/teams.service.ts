import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as jose from 'node-jose';
import * as uuid from 'uuid';

export class Teams {

  constructor(public teamId: string, public teamName: string, public teamDesc: string) {}
}

@Injectable()
export class TeamsService {

  // Hard coded
  accessToken: String = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VybmFtZSIsImlhdCI6MTYxNjA5NTMyNywiZXhwIjoxNjE2MTA5NzI3fQ.p-g3CD5IahFZ6utPhdwP6QCacABYSoYQSboReT5b_gVglYzg6lFSMOkgeFfXA-4yvO7xkARcLncsKnDS7xdQCw';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/sample/api/setup/teams');
  }

  createTeam(team: Teams): Observable<any> {
    const body = { 'teamId': team.teamId, 'teamName': team.teamName, 'teamDesc': team.teamDesc};
    console.log(body);
    const headers = { 'Authorization': 'Bearer ' + this.accessToken, 'Content-Type': 'application/json', 'Accept': 'application/json' };
    return this.http.post('http://localhost:8080/sample/services/api/setup/teams', body, { headers });
  }

  getTeam(teamId: String): Observable<any> {
    const headers = { 'Authorization': 'Bearer ' + this.accessToken, 'Accept': 'application/json' };
    return this.http.get('http://localhost:8080/sample/services/api/setup/teams/${teamId}', { headers });
  }

  deleteTeam(teamId: String): Observable<any> {
    const headers = { 'Authorization': 'Bearer ' + this.accessToken, 'Accept': 'application/json' };
    return this.http.delete('http://localhost:8080/sample/services/api/setup/teams/${teamId}', { headers });
  }
}
