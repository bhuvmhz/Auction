import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-player-by-team',
  templateUrl: './player-by-team.component.html',
  styleUrls: ['./player-by-team.component.scss']
})
export class PlayerByTeamComponent implements OnInit {
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  getCurrentPlayerListOnTable(team: string): any[] {
    var players = this.dataService.getCurrentPlayerListOnTable(team);
    return players;
  }
}
