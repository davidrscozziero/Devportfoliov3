import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { IntroComponent } from './componentes/intro/intro.component';
import { BioComponent } from './componentes/bio/bio.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterendComponent } from './componentes/footerend/footerend.component';
import { TrabajosComponent } from './componentes/trabajos/trabajos.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    IntroComponent,
    BioComponent,
    ExperienciaComponent,
    ContactoComponent,
    FooterendComponent,
    TrabajosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
