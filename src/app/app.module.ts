import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlantaModule } from './planta/planta.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlantaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
