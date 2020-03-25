import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-oninit-example',
  templateUrl: './ng-oninit-example.component.html',
  styleUrls: ['./ng-oninit-example.component.css']
})
export class NgOninitExampleComponent implements OnInit {

  currentDate: Date;

  constructor() { }

  ngOnInit(): void {
    this.currentDate = new Date();
  }

}
