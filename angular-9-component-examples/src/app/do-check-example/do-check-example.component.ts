import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-do-check-example',
  templateUrl: './do-check-example.component.html',
  styleUrls: ['./do-check-example.component.css']
})
export class DoCheckExampleComponent implements DoCheck {

  @Input() cost: number;
  @Input() margin: string;

  changeDetected = false;
  changeLog: string[] = [];
  oldCost = null;
  oldMargin = null;
  oldLogLength = 0;
  noChangeCount = 0;

  ngDoCheck() {

    if (this.cost !== this.oldCost) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Cost changed to "${this.cost}" from previously "${this.oldCost}"`);
      this.oldCost = this.cost;
    }

    if (this.margin !== this.oldMargin) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Margin changed to "${this.margin}" from previously "${this.oldMargin}"`);
      this.oldMargin = this.margin;
    }

    if (this.changeDetected) {
        this.noChangeCount = 0;
    } else {
        const count = this.noChangeCount += 1;
        const noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
        if (count === 1) {
          this.changeLog.push(noChangeMsg);
        } else {
          this.changeLog[this.changeLog.length - 1] = noChangeMsg;
        }
    }

    this.changeDetected = false;
  }

  clean() {
    this.changeDetected = true;
    this.changeLog = [];
  }

}
