import { Component} from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(public _is:InformacionService,
              private router:Router){

  }

  buscar_producto(termino:string){
    console.log(termino)
    this.router.navigate(['buscar',termino])
  }
}

// De acuerdo con las guías de Angular, el método ngOnInit tiene los siguientes propósitos:
// – Realizar inicializaciones complejas: por ejemplo obtener datos por medio de un servicio para utilizarlos dentro del componente.
// – Definir variables de instancia basadas en las propiedades tipo Input.
// http://www.enrique7mc.com/2017/04/diferencia-entre-constructor-y-ngoninit-en-angular-2/
