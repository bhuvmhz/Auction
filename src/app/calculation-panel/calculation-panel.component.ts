import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculation-panel',
  templateUrl: './calculation-panel.component.html',
  styleUrls: ['./calculation-panel.component.scss']
})
export class CalculationPanelComponent implements OnInit {
  @Input() players;

  constructor() {
  }

  ngOnInit() {
  }
}