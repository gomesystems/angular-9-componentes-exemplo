import { AfterViewChecked, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-after-view-checked-child',
  template: '<input [(ngModel)]="price">'
})
export class AfterViewCheckedChildComponent {
  price = 599;
}

@Component({
  selector: 'app-ng-afterviewchecked-example',
  templateUrl: './ng-afterviewchecked-example.component.html',
  styleUrls: ['./ng-afterviewchecked-example.component.css']
})
export class NgAfterviewcheckedExampleComponent implements AfterViewChecked {

  private prevPrice = null;
  status = '';

  @ViewChild(AfterViewCheckedChildComponent) viewChild: AfterViewCheckedChildComponent;

  constructor() { }

  ngAfterViewChecked() {
    if (this.prevPrice === this.viewChild.price) {
      console.log('AfterViewChecked (no change)');
    } else {
      this.prevPrice = this.viewChild.price;
      console.log('AfterViewChecked');
      this.changeStatus();
    }
  }

  private changeStatus() {
    const s = 'This price ' + this.viewChild.price + ' is the total price include tax.';
    if (s !== this.status) {
      console.log(s);
    }
  }
}

@Component({
  selector: 'app-after-view-checked-parent',
  template: `
  <div>
    <h2>AfterView Checked Parent</h2>

    <app-ng-afterviewchecked-example  *ngIf="show"></app-ng-afterviewchecked-example>

    <p><button (click)="clear()">Clear</button></p>
  </div>
  `,
  styles: ['.parent {background: burlywood}']
})
export class AfterViewCheckedParentComponent {
  show = true;

  constructor() {
  }

  clear() {
    this.show = false;
  }
}
