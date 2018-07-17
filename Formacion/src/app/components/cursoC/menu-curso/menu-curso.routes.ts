import { Routes, RouterModule } from '@angular/router';

import { DescripcionCursoComponent } from './../descripcion-curso/descripcion-curso.component';

const COURSE_ROUTES: Routes = [
    { path: 'curso/descripcion-curso', component: DescripcionCursoComponent },
    { path: '**', component: DescripcionCursoComponent }
];

export const COURSE_ROUTING = RouterModule.forRoot(COURSE_ROUTES);
