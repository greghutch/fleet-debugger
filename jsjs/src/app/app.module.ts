import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { JsJsMapComponent } from './jsjs-google-map/jsjs-google-map.component';


@NgModule({
  declarations: [
    AppComponent,
    JsJsMapComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
