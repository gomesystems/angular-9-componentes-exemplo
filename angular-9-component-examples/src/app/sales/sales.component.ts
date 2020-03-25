import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  title = 'Sales Report';
  created: Date = new Date();
  subtitle = '';

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.salesDate();
  }

  salesDate() {
    this.subtitle = `${this.title} of ${this.datePipe.transform(this.created, 'short')}`;
  }

}
