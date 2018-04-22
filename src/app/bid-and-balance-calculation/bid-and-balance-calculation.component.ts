import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-bid-and-balance-calculation',
  templateUrl: './bid-and-balance-calculation.component.html',
  styleUrls: ['./bid-and-balance-calculation.component.scss']
})
export class BidAndBalanceCalculationComponent implements OnInit {
  @ViewChild('maxbid') maxbid: ElementRef;
  @ViewChild('owner') owner: ElementRef;
  @Input() players: any[];
  totalDeductions: number = 0;
  
  constructor(private dataService: DataService) { }

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
    var players = this.dataService.getCurrentPlayerListOnTable(team);
    return players;
  }
}
