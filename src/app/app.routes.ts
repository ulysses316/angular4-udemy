import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  PortafolioComponent,
  PortaitemComponent,
  SearchComponent
} from "./components/index.paginas";


const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: PortaitemComponent },
  { path: 'buscar/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:false });
// importamos los comonents desde el index.paginas.ts que creamos








// Este es de la url original en la que no tenemos ninguna ruta

//path es el nombre de la ruta, y component el componente que queremos vizualizar


//para redireccionar al 404
