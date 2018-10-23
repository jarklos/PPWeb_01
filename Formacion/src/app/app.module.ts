import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Services
import { HttpClientModule } from '@angular/common/http';
import { PaisesService } from './services/paises.service';
import { UsuariosService } from './services/usuarios.service';
import { VideoService } from './services/videos.service';

// Models
import { User } from './models/user.model';

// Router
import { APP_ROUTING } from './app.routes';

// Gestures
import 'hammerjs';

// Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Charts
import { ChartsModule } from 'ng2-charts';

// Pages
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { UserComponent } from './components/user/user.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { UserResumeComponent } from './components/user/user-resume/user-resume.component';
import { UserDetallesComponent } from './components/user/user-detalles/user-detalles.component';
import { UserNewsComponent } from './components/user/user-news/user-news.component';
import { UserCompradoComponent } from './components/user/user-comprado/user-comprado.component';
import { UserNavComponent } from './components/user/user-nav/user-nav.component';
import { UserHistoryComponent } from './components/user/user-history/user-history.component';
import { UserSoldComponent } from './components/user/user-sold/user-sold.component';
import { UserSoldMenuComponent } from './components/user/user-sold-menu/user-sold-menu.component';
import { UserDataComponent } from './components/user/user-data/user-data.component';
import { UserDataMenuComponent } from './components/user/user-data-menu/user-data-menu.component';
import { Error404Component } from './components/errors/error404/error404.component';
import { CompraComponent } from './components/compra/compra.component';
import { Error500Component } from './components/errors/error500/error500.component';
import { Error503Component } from './components/errors/error503/error503.component';
import { FormUsuarioComponent } from './components/form-usuario/form-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FormulariosComponent,
    FooterComponent,
    ResetPassComponent,
    UserComponent,
    AcercadeComponent,
    UserResumeComponent,
    UserDetallesComponent,
    UserNewsComponent,
    UserCompradoComponent,
    UserNavComponent,
    UserHistoryComponent,
    AcercadeComponent,
    UserSoldComponent,
    UserSoldMenuComponent,
    UserDataComponent,
    UserDataMenuComponent,
    Error404Component,
    CompraComponent,
    Error500Component,
    Error503Component,
    FormUsuarioComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ChartsModule
  ],
  providers: [
    PaisesService,
    User,
    UsuariosService,
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
