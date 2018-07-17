import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListaDeVideosComponent } from './components/lista-de-videos/lista-de-videos.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { CursoCComponent } from './components/cursoC/cursoC.component';

const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lista-de-videos', component: ListaDeVideosComponent },
    { path: 'video-player', component: VideoPlayerComponent },
    { path: 'form', component: FormulariosComponent },
    { path: 'curso', component: CursoCComponent },
    { path: '**', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
