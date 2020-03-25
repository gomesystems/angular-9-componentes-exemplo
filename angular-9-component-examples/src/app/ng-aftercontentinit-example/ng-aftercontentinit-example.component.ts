import { Component, AfterContentInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-after-content-init-child',
  template: '<input [(ngModel)]="price">'
})
export class AfterContentInitChildComponent {
  price = 1099;
}

@Component({
  selector: 'app-ng-aftercontentinit-example',
  templateUrl: './ng-aftercontentinit-example.component.html',
  styleUrls: ['./ng-aftercontentinit-example.component.css']
})
export class NgAftercontentinitExampleComponent implements AfterContentInit {

  private prevPrice = null;
  status = '';

  @ContentChild(AfterContentInitChildComponent) contentChild: AfterContentInitChildComponent;

  constructor() { }

  ngAfterContentInit() {
    this.changeStatus();
  }

  private changeStatus() {
    this.status = 'This price ' + this.contentChild.price + ' is a basic price';
  }

}

@Component({
  selector: 'app-after-content-parent',
  template: `
  <div>
    <h2>AfterContent</h2>
    <div *ngIf="show">
      <app-ng-aftercontentinit-example>
        <app-after-content-init-child></app-after-content-init-child>
      </app-ng-aftercontentinit-example>
    </div>
    <h4>-- AfterContent Logs --</h4>
    <p><button (click)="reset()">Reset</button></p>
  </div>
  `,
  styles: ['.parent {background: burlywood}']
})
export class AfterContentInitParentComponent {
  show = true;

  constructor() {
  }

  reset() {
    this.show = false;
  }
}
