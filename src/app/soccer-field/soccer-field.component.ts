import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-soccer-field',
  templateUrl: './soccer-field.component.html',
  styleUrls: ['./soccer-field.component.scss']
})
export class SoccerFieldComponent implements OnInit {
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  setRotationDelta = (delta: number) => {
    var newDelta: string;
    if (delta === -30) {
      newDelta = delta + 'deg';
      $('.soccer-body').css({
        'transform': 'scale(0.6, 0.6) rotate(' + newDelta + ')'
      });
    } else if (delta === -45) {
      newDelta = delta + 'deg';
      $('.soccer-body').css({
        'transform': 'scale(0.55, 0.55) rotate(' + newDelta + ')'
      });
    } else if (delta === 360) {
      newDelta = delta + 'deg';
      $('.soccer-body').css({
        'transform': 'scale(0.9, 0.9) rotate(' + newDelta + ')'
      });
    }
  }

  getCurrentPlayerListOnTable(team: string): any[] {
    var players = this.dataService.getCurrentPlayerListOnTable(team);
    return players;
  }
}
