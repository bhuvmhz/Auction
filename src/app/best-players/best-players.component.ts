import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-best-players',
  templateUrl: './best-players.component.html',
  styleUrls: ['./best-players.component.scss']
})
export class BestPlayersComponent implements OnInit {
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  getCurrentPlayerListOnTable(team: string): any[] {
    var players = this.dataService.getCurrentPlayerListOnTable(team);
    return players;
  }
}
