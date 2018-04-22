import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-best-players',
  templateUrl: './best-players.component.html',
  styleUrls: ['./best-players.component.scss']
})
export class BestPlayersComponent implements OnInit {
  teamRatings: any = [];
  formation: any;
  bestTeams: any;
  bestFinalProcessed: any = [];

  constructor(private dataService: DataService) {
    this.teamRatings = dataService.teamRatings;
    this.formation = dataService.formation;
  }

  ngOnInit() {
    this.theBestTeams();
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
      let remains = [];
      let selectedSquad = [];
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

  theBestTeams() {
    this.bestTeams = this.selectSquad(this.formation, this.teamRatings);
    this.bestTeams.forEach(best => {
      this.bestFinalProcessed.push(_.flattenDeep(best));
    });
  }

  getWordPosition(num: number) {
    switch (num) {
      case 0: {
        return "The Best Team";
      }
      case 1: {
        return "Second Best Team";
      }
      case 2: {
        return "Third Best Team";
      }
      case 3: {
        return "Fourth Best Team";
      }
      case 4: {
        return "Fifth Best Team";
      }
      case 5: {
        return "Sixth Best Team";
      }
    }
  }
}
