import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { UserComponent } from './components/user/user.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { Error404Component } from './components/errors/error404/error404.component';
import { CompraComponent } from './components/compra/compra.component';
import { FormUsuarioComponent } from './components/form-usuario/form-usuario.component';

const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'form', component: FormulariosComponent },
    { path: 'registro', component: FormUsuarioComponent },
    { path: 'reset-pass', component: ResetPassComponent },
    { path: 'user', component: UserComponent},
    { path: 'acercade', component: AcercadeComponent },
    { path: 'compra', component: CompraComponent },
    { path: '**', component: Error404Component }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
