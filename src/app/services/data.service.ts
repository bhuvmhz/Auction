import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable()
export class DataService {
  players: any = [];

  constructor(private httpClient: HttpClient) {
    for (let i = 0; i < 43; i++) {
      this.players.push({
        name: '',
        position: '',
        team: '',
        bidAmount: null,
        plannedAmount: 25,
        exceedAmount: null,
        isReleased: false,
        deduction: 0
      });
    }
  }

  positions: string[] = ['Forward', 'Defense', 'Goal Keeper'];

  formation: any = {
    "GK": 1,
    "Defense": 4,
    "Forward": 4
  };

  getPlayers(): any[] {
    return this.players;
  };

  getPlayersList() {
    return this.httpClient.get('./data/playersList.json');
  }

  getTeams() {
    return this.httpClient.get('./data/teams.json');
  };

  getTeamRatings() {
    return this.httpClient.get('./data/playerRatings.json');
  };

  getPositions(): string[] {
    return this.positions;
  }

  getCurrentPlayerListOnTable(team: string): any[] {
    var tempPlayers: any;
    var uniqueTempPlayers: any;
    if (team === 'KeralaFC') {
      tempPlayers = _.filter(this.players, { team: team, isReleased: false });
    } else {
      tempPlayers = _.filter(this.players, { team: team });
    }
    uniqueTempPlayers = _.uniqBy(tempPlayers, 'name');
    return uniqueTempPlayers;
  }
}