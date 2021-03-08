import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
})
export class ClasesComponent implements OnInit {

 public  alerta:string = "alert-danger"

public  propiedades: Object = {
   danger: false,
 }

  constructor() { }

  ngOnInit(): void {
  }

}
