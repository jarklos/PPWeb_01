import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListaDeVideosComponent } from './components/lista-de-videos/lista-de-videos.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { CursoCComponent } from './components/cursoC/cursoC.component';
import { DescripcionCursoComponent } from './components/cursoC/descripcion-curso/descripcion-curso.component';
import { VideosCursoComponent } from './components/cursoC/videos-curso/videos-curso.component';
import { MaterialComponent } from './components/cursoC/material/material.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';

const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lista-de-videos', component: ListaDeVideosComponent },
    { path: 'video-player', component: VideoPlayerComponent },
    { path: 'form', component: FormulariosComponent },
    { path: 'reset-pass', component: ResetPassComponent },
    { path: 'curso/:id', component: CursoCComponent,
        children: [
            { path: '', component: DescripcionCursoComponent },
            { path: 'descripcion', component: DescripcionCursoComponent },
            { path: 'contenido', component: VideosCursoComponent },
            { path: 'material', component: MaterialComponent },
        ]
    },
    { path: '**', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
