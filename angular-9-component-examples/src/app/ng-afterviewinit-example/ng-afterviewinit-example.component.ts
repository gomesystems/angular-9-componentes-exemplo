import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-after-view-init-child',
  template: '<input [(ngModel)]="price">'
})
export class AfterViewInitChildComponent {
  price = 599;
}

@Component({
  selector: 'app-ng-afterviewinit-example',
  templateUrl: './ng-afterviewinit-example.component.html',
  styleUrls: ['./ng-afterviewinit-example.component.css']
})
export class NgAfterviewinitExampleComponent implements AfterViewInit {

  private prevPrice = null;
  status = '';

  @ViewChild(AfterViewInitChildComponent) viewChild: AfterViewInitChildComponent;

  constructor() { }

  ngAfterViewInit() {
    this.changeStatus();
  }

  private changeStatus() {
    const s = 'This price ' + this.viewChild.price + ' is the total price include tax.';
    if (s !== this.status) {
      console.log(s);
    }
  }

}

@Component({
  selector: 'app-after-view-init-parent',
  template: `
  <div>
    <h2>AfterView Init Parent</h2>

    <app-ng-afterviewinit-example  *ngIf="show"></app-ng-afterviewinit-example>

    <p><button (click)="clear()">Clear</button></p>
  </div>
  `,
  styles: ['.parent {background: burlywood}']
})
export class AfterViewInitParentComponent {
  show = true;

  constructor() {
  }

  clear() {
    this.show = false;
  }
}
