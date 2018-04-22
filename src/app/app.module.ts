import { BrowserModule } from '@angular/platform-browser';
import { AngularDraggableModule } from 'angular2-draggable';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';


import { AppComponent } from './app.component';
import { PlayerRowComponent } from './player-row/player-row.component';
import { CalculationComponent } from './calculation/calculation.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerRowComponent,
    CalculationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularDraggableModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
