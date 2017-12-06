import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductoService {

  productos:any[]=[];
  cargando:boolean=true;

  constructor(private http:Http){
    this.cargar_productos();
  }

  public cargar_productos(){
    this.http.get('https://angular-curso-3574a.firebaseio.com/productos_idx.json')
        .subscribe(res =>  {
          this.productos=res.json();
          this.cargando=false;
        })
  }

}
