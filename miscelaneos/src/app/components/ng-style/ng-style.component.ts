import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p style= "font-size: 10px;">
    </p>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
