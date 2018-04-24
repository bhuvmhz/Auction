import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable()
export class DataService {
  players: any = [];
  constructor(private http: HttpClient) {
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

  playersList: any[] = [
    {
      name: 'Amal George',
      isInList: false
    },
    {
      name: 'Arun Karunakaran',
      isInList: false
    },
    {
      name: 'Arun Niravath',
      isInList: false
    },
    {
      name: 'Asheak Mankidy',
      isInList: false
    },
    {
      name: 'Anil Vincent',
      isInList: false
    },
    {
      name: 'Basty Kudiyate',
      isInList: false
    },
    {
      name: 'Ben Thomas',
      isInList: false
    },
    {
      name: 'Bibin Bose',
      isInList: false
    },
    {
      name: 'Bibin Thambi',
      isInList: false
    },
    {
      name: 'Bijin Paul',
      isInList: false
    },
    {
      name: 'Dinto Devassy',
      isInList: false
    },
    {
      name: 'Dinto Ittiachan',
      isInList: false
    },
    {
      name: 'Devalal P N',
      isInList: false
    },
    {
      name: 'Faheem Moothorakayil',
      isInList: false
    },
    {
      name: 'Georgy Varghese',
      isInList: false
    },
    {
      name: 'Hafiz P K',
      isInList: false
    },
    {
      name: 'Jackson Francis',
      isInList: false
    },
    {
      name: 'John Antony Akkara',
      isInList: false
    },
    {
      name: 'Jac George',
      isInList: false
    },
    {
      name: 'Joe Jose',
      isInList: false
    },
    {
      name: 'Jibin George',
      isInList: false
    },
    {
      name: 'Jithin Mohan',
      isInList: false
    },
    {
      name: 'Julius Poulose Udhini',
      isInList: false
    },
    {
      name: 'Kevin John Cleatus',
      isInList: false
    },
    {
      name: 'Kishan Jayan',
      isInList: false
    },
    {
      name: 'Mohammed Niyas',
      isInList: false
    },
    {
      name: 'Midhun Jackson',
      isInList: false
    },
    {
      name: 'Mohammed Aslam',
      isInList: false
    },
    {
      name: 'Nixon Felix',
      isInList: false
    },
    {
      name: 'Nithin Palatty',
      isInList: false
    },
    {
      name: 'Praveen Baby',
      isInList: false
    },
    {
      name: 'Rajeev George',
      isInList: false
    },
    {
      name: 'Robin Johny',
      isInList: false
    },
    {
      name: 'Robinson Kodiyan',
      isInList: false
    },
    {
      name: 'Sajan Kurian',
      isInList: false
    },
    {
      name: 'Sayyed Najmudheen',
      isInList: false
    },
    {
      name: 'Sajish Gopalakrishnan',
      isInList: false
    },
    {
      name: 'Simon Yeldos',
      isInList: false
    },
    {
      name: 'Tarun Nambiar',
      isInList: false
    },
    {
      name: 'Tony Thomas',
      isInList: false
    },
    {
      name: 'Vibindas Koloth',
      isInList: false
    },
    {
      name: 'Vinod Mathew',
      isInList: false
    },
    {
      name: 'Vaisakh Nambiar',
      isInList: false
    }
  ];

  teams: any[] = [
    {
      name: 'KeralaFC'
    },
    {
      name: 'Rising'
    },
    {
      name: 'Tintumon'
    },
    {
      name: 'CochinFC'
    }
  ];

  positions: string[] = ['Forward', 'Defense', 'Goal Keeper'];

  teamRatings: any[] = [
    { "Player": "Arun Karunakaran", "Position": "GK", "Rating": 3.25 },
    { "Player": "Arun Niravath", "Position": "Forward", "Rating": 3.00 },
    { "Player": "Allwin Alex", "Position": "Forward", "Rating": 3.45 },
    { "Player": "Asheak Mankidy", "Position": "GK", "Rating": 3.5 },
    { "Player": "Amal George", "Position": "Defense", "Rating": 4.10 },
    { "Player": "Anil Vincent", "Position": "Forward", "Rating": 3.85 },
    { "Player": "Basty Kudiyate", "Position": "GK", "Rating": 3.65 },
    { "Player": "Ben Thomas", "Position": "Forward", "Rating": 3.0 },
    { "Player": "Bibin Bose", "Position": "Defense", "Rating": 2.65 },
    { "Player": "Bibin Thambi", "Position": "Defense", "Rating": 4.35 },
    { "Player": "Bijin Paul", "Position": "Defense", "Rating": 2.95 },
    { "Player": "Davis Mathew", "Position": "Forward", "Rating": 2.75 },
    { "Player": "Dinto Devassy", "Position": "Forward", "Rating": 3.15 },
    { "Player": "Dinto Ittiachan", "Position": "Defense", "Rating": 3.5 },
    { "Player": "Devalal P N", "Position": "Forward", "Rating": 4.15 },
    { "Player": "Ebin PK", "Position": "GK", "Rating": 3.5 },
    { "Player": "Faheem Moothorakayil", "Position": "Forward", "Rating": 3.95 },
    { "Player": "Georgy Varghese", "Position": "Forward", "Rating": 3.35 },
    { "Player": "Hafiz P K", "Position": "Forward", "Rating": 4.0 },
    { "Player": "Jackson Francis", "Position": "Forward", "Rating": 2.75 },
    { "Player": "John Antony Akkara", "Position": "Forward", "Rating": 4.85 },
    { "Player": "Jac George", "Position": "Forward", "Rating": 2.75 },
    { "Player": "Joe Jose", "Position": "Defense", "Rating": 3.10 },
    { "Player": "Jibin George", "Position": "Forward", "Rating": 3.5 },
    { "Player": "Jithin Mohan", "Position": "Forward", "Rating": 3.85 },
    { "Player": "Julius Poulose Udhini", "Position": "Forward", "Rating": 2.75 },
    { "Player": "Kevin John Cleatus", "Position": "Forward", "Rating": 4.25 },
    { "Player": "Kishan Jayan", "Position": "Forward", "Rating": 3.35 },
    { "Player": "Mohammed Niyas", "Position": "Defense", "Rating": 3.75 },
    { "Player": "Midhun Jackson", "Position": "Forward", "Rating": 4.20 },
    { "Player": "Mohammed Aslam", "Position": "Forward", "Rating": 3.65 },
    { "Player": "Nixon Felix", "Position": "Defense", "Rating": 2.5 },
    { "Player": "Nithin Palatty", "Position": "Defense", "Rating": 3.30 },
    { "Player": "Praveen Baby", "Position": "GK", "Rating": 3.85 },
    { "Player": "Prince Menon", "Position": "Defense", "Rating": 3.80 },
    { "Player": "Rajeev George", "Position": "Defense", "Rating": 2.5 },
    { "Player": "Robin Johny", "Position": "Forward", "Rating": 4.65 },
    { "Player": "Robinson Kodiyan", "Position": "Defense", "Rating": 2.5 },
    { "Player": "Rony Roby", "Position": "Forward", "Rating": 2.75 },
    { "Player": "Sajan Kurian", "Position": "Defense", "Rating": 4.80 },
    { "Player": "Sayyed	Najmudheen", "Position": "Defense", "Rating": 4.15 },
    { "Player": "Sajish	Gopalakrishnan", "Position": "GK", "Rating": 3.65 },
    { "Player": "Srikanth keezhamadathil", "Position": "Defense", "Rating": 2.75 },
    { "Player": "Simon Yeldos", "Position": "Forward", "Rating": 4.80 },
    { "Player": "Siby George", "Position": "Forward", "Rating": 2.75 },
    { "Player": "Sujith Babu", "Position": "Defense", "Rating": 3.00 },
    { "Player": "Tarun Nambiar", "Position": "Forward", "Rating": 4.25 },
    { "Player": "Tony Thomas", "Position": "Defense", "Rating": 2.65 },
    { "Player": "Vibindas Koloth", "Position": "Defense", "Rating": 4.1 },
    { "Player": "Vinod Mathew", "Position": "Forward", "Rating": 3.55 },
    { "Player": "Vaisakh Nambiar", "Position": "Defense", "Rating": 3.20 }
  ];

  formation: any = {
    "GK": 1,
    "Defense": 4,
    "Forward": 4
  };

  getPlayers(): any[] {
    return this.players;
  };

  getTeams(): string[] {
    return this.teams;
  };

  getPositions(): string[] {
    return this.positions;
  }

  getPlayersList(): string[] {
    return this.playersList;
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