import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardStatusComponent } from './card-status/card-status.component';
import { CardLocationsComponent } from './card-locations/card-locations.component';
import { CardEpisodesComponent } from './card-episodes/card-episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    CardStatusComponent,
    CardLocationsComponent,
    CardEpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
