import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-calculation-panel',
  templateUrl: './calculation-panel.component.html',
  styleUrls: ['./calculation-panel.component.scss']
})
export class CalculationPanelComponent implements OnInit {
  isFix: boolean = false;
  @Input() players;
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    var y = $event.currentTarget.scrollY;
    if (y <= 135) {
      this.isFix = false;
    } else {
      this.isFix = true;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }
}