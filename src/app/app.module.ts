import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GifsSectionComponent } from './gifs-section/gifs-section.component';
import { GifCardComponent } from './gif-card/gif-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GifsSectionComponent,
    GifCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
