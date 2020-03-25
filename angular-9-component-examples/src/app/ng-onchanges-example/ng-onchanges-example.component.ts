import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-onchanges-example',
  templateUrl: './ng-onchanges-example.component.html',
  styleUrls: ['./ng-onchanges-example.component.css']
})
export class NgOnchangesExampleComponent implements OnChanges {

  @Input() cost: number;
  @Input() margin: number;
  @Input() price: number;

  changeLog: string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const chng = changes[propName];
        const cur  = JSON.stringify(chng.currentValue);
        const prev = JSON.stringify(chng.previousValue);
        this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      }
    }
  }

  clear() { this.changeLog = []; }

}
