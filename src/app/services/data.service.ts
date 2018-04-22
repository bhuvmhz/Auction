import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  players: any = [];
  constructor() {
    //total 44 players
    for (let i = 0; i < 43; i++) {
      this.players.push({
        name: '',
        position: '',
        team: '',
        bidAmount: null,
        plannedAmount: 25,
        exceedAmount: null,
        isReleased: false
      });
    }
  }

  playersList: any[] = [
    {
      name: 'Amal George',
      isInList : false
    },
    {
      name: 'Arun Karunakaran',
      isInList : false
    },
    {
      name: 'Arun Niravath',
      isInList : false
    },
    {
      name: 'Asheak Mankidy',
      isInList : false
    },
    {
      name: 'Anil Vincent',
      isInList : false
    },
    {
      name: 'Basty Kudiyate',
      isInList : false
    },
    {
      name: 'Ben Thomas',
      isInList : false
    },
    {
      name: 'Bibin Bose',
      isInList : false
    },
    {
      name: 'Bibin Thambi',
      isInList : false
    },
    {
      name: 'Bijin Paul',
      isInList : false
    },
    {
      name: 'Dinto Devassy',
      isInList : false
    },
    {
      name: 'Dinto Ittiachan',
      isInList : false
    },
    {
      name: 'Devalal P N',
      isInList : false
    },
    {
      name: 'Faheem Moothorakayil',
      isInList : false
    },
    {
      name: 'Georgy Varghese',
      isInList : false
    },
    {
      name: 'Hafiz P K',
      isInList : false
    },
    {
      name: 'Jackson Francis',
      isInList : false
    },
    {
      name: 'John Antony Akkara',
      isInList : false
    },
    {
      name: 'Jac George',
      isInList : false
    },
    {
      name: 'Joe Jose',
      isInList : false
    },
    {
      name: 'Jibin George',
      isInList : false
    },
    {
      name: 'Jithin Mohan',
      isInList : false
    },
    {
      name: 'Julius Poulose Udhini',
      isInList : false
    },
    {
      name: 'Kevin John Cleatus',
      isInList : false
    },
    {
      name: 'Kishan Jayan',
      isInList : false
    },
    {
      name: 'Mohammed Niyas',
      isInList : false
    },
    {
      name: 'Midhun Jackson',
      isInList : false
    },
    {
      name: 'Mohammed Aslam',
      isInList : false
    },
    {
      name: 'Nixon Felix',
      isInList : false
    },
    {
      name: 'Nithin Palatty',
      isInList : false
    },
    {
      name: 'Praveen Baby',
      isInList : false
    },
    {
      name: 'Rajeev George',
      isInList : false
    },
    {
      name: 'Robin Johny',
      isInList : false
    },
    {
      name: 'Robinson Kodiyan',
      isInList : false
    },
    {
      name: 'Sajan Kurian',
      isInList : false
    },
    {
      name: 'Sayyed Najmudheen',
      isInList : false
    },
    {
      name: 'Sajish Gopalakrishnan',
      isInList : false
    },
    {
      name: 'Simon Yeldos',
      isInList : false
    },
    {
      name: 'Tarun Nambiar',
      isInList : false
    },
    {
      name: 'Tony Thomas',
      isInList : false
    },
    {
      name: 'Vibindas Koloth',
      isInList : false
    },
    {
      name: 'Vinod Mathew',
      isInList : false
    },
    {
      name: 'Vaisakh Nambiar',
      isInList : false
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

  selectPlayersByTeam(team: string) {

  }
}