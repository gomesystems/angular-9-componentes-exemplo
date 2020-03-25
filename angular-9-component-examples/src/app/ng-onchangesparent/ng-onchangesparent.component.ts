import { Component, ViewChild } from '@angular/core';
import { NgOnchangesExampleComponent } from '../ng-onchanges-example/ng-onchanges-example.component';

@Component({
  selector: 'app-ng-onchangesparent',
  templateUrl: './ng-onchangesparent.component.html',
  styleUrls: ['./ng-onchangesparent.component.css']
})
export class NgOnchangesparentComponent {

  cost: number;
  margin: number;
  price: number;
  @ViewChild(NgOnchangesExampleComponent) childView: NgOnchangesExampleComponent;

  constructor() {
    this.clear();
  }

  clear() {
    this.cost = 100;
    this.margin = 10;
    this.price = 110;
    if (this.childView) { this.childView.clear(); }
  }

}
