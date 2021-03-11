import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
})
export class ClasesComponent implements OnInit {

  public  alerta = 'alert-danger';
  public cargando = false;

 public propiedades: any = {
   danger: false,
 };

  constructor() { }

  public ngOnInit(): void {
  }

   ejecutar() {
    this.cargando = true;
    setTimeout( () => this.cargando = false, 3000 );
  }

}
