import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaDeVideosComponent } from './lista-de-videos/lista-de-videos.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';




const rutasApp = [
{path: 'lista-video', component: ListaDeVideosComponent},
{path: 'video-player', component: VideoPlayerComponent},
{path: '', redirectTo: 'lista-video', pathMatch: 'full'},
{path: '**', component: ListaDeVideosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaDeVideosComponent,
    VideoPlayerComponent,
  ],
  imports: [
    RouterModule.forRoot(rutasApp),
    BrowserModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
