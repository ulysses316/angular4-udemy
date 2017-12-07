import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductoService {

  productos:any[]=[];
  cargando:boolean=true;

  constructor(private http:Http){
    this.cargar_productos();
  }

// ESTE NOS CARGA EL PRODUCTTO ITEM
  public cargar_producto( cod:string){
    return this.http.get('https://angular-curso-3574a.firebaseio.com/productos/'+cod+'.json')
  }
// ESTE NOS CARGA LA BASE DE DATOS DE PRODUCTOS DE FIREASE
  public cargar_productos(){
    this.http.get('https://angular-curso-3574a.firebaseio.com/productos_idx.json')
        .subscribe(res =>  {

          this.productos=res.json();
          this.cargando=false;
        })
  }

}
