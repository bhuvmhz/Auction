import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  players: any[];
  teams: any;
  positions: string[];  
  playersList: any;

  constructor(dataService: DataService) {
    this.players = dataService.getPlayers();
    this.positions = dataService.getPositions();

    dataService.getPlayersList().subscribe( data => {
      this.playersList = data;
    });

    dataService.getTeams().subscribe(data => {
      this.teams = data
    });
  }
}
