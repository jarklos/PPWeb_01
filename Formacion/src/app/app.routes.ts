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
import { RegistroVComponent } from './components/registro-v/registro-v.component';
import { UserComponent } from './components/user/user.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { PopupComponent } from './components/popup/popup.component';
import { Error404Component } from './components/errors/error404/error404.component';
import { CompraComponent } from './compra/compra.component';

const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lista-de-videos', component: ListaDeVideosComponent },
    { path: 'video-player', component: VideoPlayerComponent },
    { path: 'popUp', component: PopupComponent },
    { path: 'form', component: FormulariosComponent },
    { path: 'reset-pass', component: ResetPassComponent },
    { path: 'curso/:id', component: CursoCComponent,
        children: [
            { path: 'descripcion', component: DescripcionCursoComponent },
            { path: 'contenido', component: VideosCursoComponent },
            { path: 'material', component: MaterialComponent }
        ]
    },
    { path: 'curso', component: CursoCComponent },
    { path: 'formV', component: RegistroVComponent },
    { path: 'user', component: UserComponent},
    { path: 'acercade', component: AcercadeComponent },
    {path: 'compra', component: CompraComponent},
    { path: '**', component: Error404Component }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
