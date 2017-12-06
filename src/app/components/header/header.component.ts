import { Component} from '@angular/core';
import { InformacionService } from '../../services/informacion.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(public _is:InformacionService){}
}

// De acuerdo con las guías de Angular, el método ngOnInit tiene los siguientes propósitos:
// – Realizar inicializaciones complejas: por ejemplo obtener datos por medio de un servicio para utilizarlos dentro del componente.
// – Definir variables de instancia basadas en las propiedades tipo Input.
// http://www.enrique7mc.com/2017/04/diferencia-entre-constructor-y-ngoninit-en-angular-2/
