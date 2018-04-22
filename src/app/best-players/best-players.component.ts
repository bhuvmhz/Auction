import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-best-players',
  templateUrl: './best-players.component.html',
  styleUrls: ['./best-players.component.scss']
})
export class BestPlayersComponent implements OnInit {
  team: any[] = [
    { "Player": "Arun Karunakaran", "Position": "GK", "Rating": 3.25 },
    { "Player": "Arun Niravath", "Position": "Forward", "Rating": 3.00 },
    { "Player": "Asheak Mankidy", "Position": "Defense", "Rating": 2.75 },
    { "Player": "Amal George", "Position": "Defense", "Rating": 4.10 },
    { "Player": "Anil Vincent", "Position": "Forward", "Rating": 3.75 },
    { "Player": "Basty Kudiyate", "Position": "GK", "Rating": 3.65 },
    { "Player": "Ben Thomas", "Position": "Forward", "Rating": 3.0 },
    { "Player": "Bibin Bose", "Position": "GK", "Rating": 2.65 },
    { "Player": "Bibin Thambi", "Position": "Forward", "Rating": 2.5 },
    { "Player": "Bijin Paul", "Position": "Defense", "Rating": 2.85 },
    { "Player": "Dinto Devassy", "Position": "Forward", "Rating": 3.1 },
    { "Player": "Dinto Ittiachan", "Position": "Forward", "Rating": 3.5 },
    { "Player": "Devalal P N", "Position": "Forward", "Rating": 4.15 },
    { "Player": "Faheem Moothorakayil", "Position": "Defense", "Rating": 3.95 },
    { "Player": "Georgy Varghese", "Position": "Forward", "Rating": 3.35 },
    { "Player": "Hafiz P K", "Position": "Forward", "Rating": 4.0 },
    { "Player": "Jackson Francis", "Position": "Forward", "Rating": 2.75 },
    { "Player": "John Antony Akkara", "Position": "Forward", "Rating": 4.75 },
    { "Player": "Jac George", "Position": "Forward", "Rating": 2.75 },
    { "Player": "Joe Jose", "Position": "Forward", "Rating": 3.10 },
    { "Player": "Jibin George", "Position": "Defense", "Rating": 3.5 },
    { "Player": "Jithin Mohan", "Position": "Forward", "Rating": 3.85 },
    { "Player": "Julius Poulose Udhini", "Position": "Defense", "Rating": 2.75 },
    { "Player": "Kevin John Cleatus", "Position": "Forward", "Rating": 4.25 },
    { "Player": "Kishan Jayan", "Position": "Forward", "Rating": 3.35 },
    { "Player": "Mohammed Niyas", "Position": "Defense", "Rating": 3.75 },
    { "Player": "Midhun Jackson", "Position": "Forward", "Rating": 4.20 },
    { "Player": "Mohammed Aslam", "Position": "Forward", "Rating": 3.65 },
    { "Player": "Nixon Felix", "Position": "GK", "Rating": 2.5 },
    { "Player": "Nithin Palatty", "Position": "Defense", "Rating": 3.30 },
    { "Player": "Praveen Baby", "Position": "GK", "Rating": 3.80 },
    { "Player": "Rajeev George", "Position": "Forward", "Rating": 2.5 },
    { "Player": "Robin Johny", "Position": "Forward", "Rating": 4.55 },
    { "Player": "Robinson Kodiyan", "Position": "Defense", "Rating": 2.5 },
    { "Player": "Rony Roby", "Position": "Defense", "Rating": 2.75 },
    { "Player": "Sajan Kurian", "Position": "Defense", "Rating": 4.80 },
    { "Player": "Sayyed	Najmudheen", "Position": "Defense", "Rating": 3.95 },
    { "Player": "Sajish	Gopalakrishnan", "Position": "GK", "Rating": 3.45 },
    { "Player": "Srikanth keezhamadathil", "Position": "Forward", "Rating": 2.75 },
    { "Player": "Simon Yeldos", "Position": "Forward", "Rating": 4.85 },
    { "Player": "Tarun Nambiar", "Position": "Forward", "Rating": 4.25 },
    { "Player": "Tony Thomas", "Position": "Forward", "Rating": 2.65 },
    { "Player": "Vibindas Koloth", "Position": "Defense", "Rating": 3.80 },
    { "Player": "Vinod Mathew", "Position": "Forward", "Rating": 3.45 },
    { "Player": "Vaisakh Nambiar", "Position": "Defense", "Rating": 3.20 }
  ];

  formation: any = {
    "GK": 1,
    "Defense": 4,
    "Forward": 4
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.funct();
  }

  getCurrentPlayerListOnTable(team: string): any[] {
    var players = this.dataService.getCurrentPlayerListOnTable(team);
    return players;
  }

  getPos(pos) {
    return function (player) {
      return player['Position'] == pos;
    }
  }

  selectSquad = (el, t) => {
    var that = this;
    let teams = [],
      arr = t.slice(),
      i = 0;
    while (arr.length >= 9) {
      let remains = [],
        selectedSquad = [];
      Object.keys(el).forEach(function (k, v) {
        let playersInPositions = arr.filter(that.getPos(k)),
          selected = playersInPositions.sort(function compare(a, b) {
            let y = a.Rating, z = b.Rating;
            return z - y;
          }).splice(0, el[k]);

        remains.push(playersInPositions);
        selectedSquad.push(selected);
      });
      arr = [].concat.apply([], remains);
      teams[i] = selectedSquad.slice();
      i++;
    }
    return teams;
  }

  funct() {
    var squadteams = this.selectSquad(this.formation, this.team);
    for (var t = 0; t < squadteams.length; t++) {
      console.log('myarray:' + squadteams.length);
      var squad = squadteams[t];
      for (var i = 0; i < squad.length; i++) {
        for (var x = 0; x < squad[i].length; x++) {
          console.log('downarray:' + squad[i].length);
          document.getElementById('wrapper-' + t).innerHTML += squad[i][x].Player + ', ' + squad[i][x].Position + ',  ' + squad[i][x].Rating + '<br>';
        }

      }
    }
  }
}
