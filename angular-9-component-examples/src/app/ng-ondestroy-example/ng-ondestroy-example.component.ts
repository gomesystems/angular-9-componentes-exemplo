import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ng-ondestroy-example',
  templateUrl: './ng-ondestroy-example.component.html',
  styleUrls: ['./ng-ondestroy-example.component.css']
})
export class NgOndestroyExampleComponent implements OnInit, OnDestroy {

  showTime: string;

  constructor() { }

  ngOnInit(): void {
    this.showTime = new Date().toString();
  }

  ngOnDestroy(): void {
    this.showTime = '';
  }

}
