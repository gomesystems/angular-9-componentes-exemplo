import { Component, AfterContentChecked, ContentChild } from '@angular/core';

@Component({
  selector: 'app-after-content-check-child',
  template: '<input [(ngModel)]="price">'
})
export class AfterContentCheckChildComponent {
  price = 1099;
}

@Component({
  selector: 'app-ng-aftercontentchecked-example',
  templateUrl: './ng-aftercontentchecked-example.component.html',
  styleUrls: ['./ng-aftercontentchecked-example.component.css']
})
export class NgAftercontentcheckedExampleComponent implements AfterContentChecked {

  private prevPrice = null;
  status = '';

  @ContentChild(AfterContentCheckChildComponent) contentChild: AfterContentCheckChildComponent;

  constructor() { }

  ngAfterContentChecked() {
    if (this.prevPrice === this.contentChild.price) {
      console.log('AfterContentChecked (no change)');
    } else {
      this.prevPrice = this.contentChild.price;
      console.log('AfterContentChecked');
      this.changeStatus();
    }
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
      <app-ng-aftercontentchecked-example>
        <app-after-content-check-child></app-after-content-check-child>
      </app-ng-aftercontentchecked-example>
    </div>
    <h4>-- AfterContent Logs --</h4>
    <p><button (click)="reset()">Reset</button></p>
  </div>
  `,
  styles: ['.parent {background: burlywood}']
})
export class AfterContentCheckParentComponent {
  show = true;

  constructor() {
  }

  reset() {
    this.show = false;
  }
}
