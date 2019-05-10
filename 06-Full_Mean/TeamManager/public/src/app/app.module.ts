import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerNewComponent } from './player/player-new/player-new.component';
import { PlayerStatusComponent } from './player/player-status/player-status.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PlayerListComponent,
    PlayerNewComponent,
    PlayerStatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
