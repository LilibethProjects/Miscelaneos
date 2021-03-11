import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck,
  OnChanges, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
     <app-ng-style></app-ng-style>
     <br>
    <app-css></app-css>
    <br>
    <app-clases></app-clases>
    <br><br>

   <p [appResaltado]="'red'">Hola mundo</p>
   <app-ng-switch>Warning</app-ng-switch>

  `,
  styles: [],
})
export class HomeComponent implements AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck,
OnChanges, OnDestroy, OnInit {

  constructor() {
    console.log('constructor');
  }
    ngOnInit() {
      console.log('ngOnInit');
    }

    ngOnChanges() {
      console.log('ngOnChanges');
    }

    ngDoCheck() {
      console.log('ngDoCheck');
    }
    ngAfterContentInit() {
      console.log('ngAfterContentInit');
    }
    ngAfterContentChecked() {
      console.log('ngAfterContentChecked');
    }
    ngAfterViewChecked() {
      console.log('ngAfterViewChecked');
    }
    ngAfterViewInit() {
      console.log('ngAfterViewInit');
    }

    ngOnDestroy() {
      console.log('ngOnDestroy');
    }
  }
