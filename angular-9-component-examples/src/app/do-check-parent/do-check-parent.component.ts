import { Component, ViewChild } from '@angular/core';
import { DoCheckExampleComponent } from '../do-check-example/do-check-example.component';

@Component({
  selector: 'app-do-check-parent',
  templateUrl: './do-check-parent.component.html',
  styleUrls: ['./do-check-parent.component.css']
})
export class DoCheckParentComponent {

  cost: number;
  margin: number;
  @ViewChild(DoCheckExampleComponent) childView: DoCheckExampleComponent;

  constructor() { this.clean(); }

  clean() {
    this.cost = 599;
    this.margin = 15;
    if (this.childView) { this.childView.clean(); }
  }

}
