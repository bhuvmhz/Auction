import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import * as _ from 'lodash';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {
  @ViewChild('maxbid') maxbid: ElementRef;
  @ViewChild('owner') owner: ElementRef;
  @Input() players: any[];
  totalDeductions: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  calculateBalance(): number {
    let amount: number = 0;
    this.totalDeductions = 0;
    this.players.forEach(player => {
      amount += +player.bidAmount;
      this.totalDeductions += +player.deduction;
    });
    return (this.maxbid.nativeElement.value - this.owner.nativeElement.value) - amount - this.totalDeductions;
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
}
