import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetGuiComponent } from './planet-gui/planet-gui.component';

import {HttpClientModule} from '@angular/common/http'
import { PlanetserviceService } from './planetservice.service';
import { PlanetComponent } from './planet-gui/planet/planet.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    PlanetGuiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private service:PlanetserviceService){
  }
 }
