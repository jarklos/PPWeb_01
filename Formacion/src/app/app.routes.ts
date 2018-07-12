import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { ListaDeVideosComponent } from './components/lista-de-videos/lista-de-videos.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';

const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lista-de-videos', component: ListaDeVideosComponent },
    { path: 'video-player', component: VideoPlayerComponent },
    { path: '**', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
