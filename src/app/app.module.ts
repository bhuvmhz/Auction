import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularDraggableModule } from 'angular2-draggable';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';


import { AppComponent } from './app.component';
import { PlayerRowComponent } from './player-row/player-row.component';
import { CalculationPanelComponent } from './calculation-panel/calculation-panel.component';
import { HeaderComponent } from './header/header.component';
import { BestPlayersComponent } from './best-players/best-players.component';
import { SoccerFieldComponent } from './soccer-field/soccer-field.component';
import { PlayerByTeamComponent } from './player-by-team/player-by-team.component';
import { BidAndBalanceCalculationComponent } from './bid-and-balance-calculation/bid-and-balance-calculation.component';
import { RecordRtcComponent } from './record-rtc/record-rtc.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerRowComponent,
    CalculationPanelComponent,
    HeaderComponent,
    BestPlayersComponent,
    SoccerFieldComponent,
    PlayerByTeamComponent,
    BidAndBalanceCalculationComponent,
    RecordRtcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularDraggableModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
