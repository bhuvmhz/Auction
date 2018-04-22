import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  players: any[];
  teams: any[];
  positions: string[];
  playersList: string[];

  constructor(dataService: DataService) {
    this.players = dataService.getPlayers();
    this.playersList = dataService.getPlayersList();
    this.teams = dataService.getTeams();
    this.positions = dataService.getPositions();
  }
}
