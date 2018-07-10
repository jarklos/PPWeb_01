import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaDeVideosComponent } from './lista-de-videos/lista-de-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaDeVideosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
