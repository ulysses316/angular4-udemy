import { Component} from '@angular/core';
import {ProductoService} from '../../services/producto.service';
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
})
export class PortafolioComponent {

  constructor(private _ps:ProductoService){

  }


}
