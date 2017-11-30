import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas

import { app_routing } from "./app.routes"


//Componentes
import { AppComponent } from './app.component';
// forma de importar un componente creado por uno
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { PortaitemComponent } from './components/portaitem/portaitem.component';



@NgModule({
  declarations: [
    AppComponent,
    // forma de importar un componente creado por uno, en el JSON

    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortaitemComponent,
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
