import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
@Component({
  selector: 'app-portaitem',
  templateUrl: './portaitem.component.html',

})
export class PortaitemComponent {
  producto:any=undefined;
  codigo:string=undefined;
  constructor(private route:ActivatedRoute,
              private _ps:ProductoService){
     route.params.subscribe( parametros=> {
      //  console.log(parametros);
      //  console.log(parametros['id']);
       _ps.cargar_producto(parametros['id'])
          .subscribe(res=>{
            this.producto=res.json();
            this.codigo=parametros['id']
          });
     });
  }


}
