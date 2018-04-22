import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-row',
  templateUrl: './player-row.component.html',
  styleUrls: ['./player-row.component.scss']
})
export class PlayerRowComponent implements OnInit {
  @Input() players;
  @Input() teams;
  @Input() positions;
  @Input() playersList;
  togglePlanAmount: boolean = false;
  releasedPlayers: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  calculateExceedAmount(planned: number, bid: number): number {
    var amount = bid > planned ? planned - bid : null;
    return amount;
  }

  canEnterBid(planned: number): boolean {
    return planned <= 0;
  }

  togglePlan(): boolean {
    this.togglePlanAmount = !this.togglePlanAmount;
    return this.togglePlanAmount;
  }

  calculateBalanceAfterRelease = (player: any) => {
    if (player.bidAmount !== 0) {
      player.deduction = 25 / 100 * player.bidAmount;
    }
    console.log(player.deduction);
    this.releasedPlayers.push(player);
    player.bidAmount = 0;
    player.plannedAmount = 25;
  }

  clearThisPlayer(player: any) {
    this.restoreNameInList(player);
    player.name = '';
    player.position = '';
    player.team = '';
    player.bidAmount = null;
    player.plannedAmount = 25;
    player.exceedAmount = null;
    player.isReleased = false;
  }

  shrinkPlayersList(player: any) {
    this.playersList.forEach(listPlayer => {
      if (listPlayer.isInList === false) {
        listPlayer.isInList = listPlayer.name === player.name;
      }
    });
  }

  restoreNameInList(player: any) {
    this.playersList.forEach(listPlayer => {
      if (listPlayer.name === player.name) {
        listPlayer.isInList = false;
      }
    });
  }
}
