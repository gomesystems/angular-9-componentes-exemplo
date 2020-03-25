import { Component, OnInit, OnChanges } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

  title = 'Item List';
  date: Date = new Date();
  simpleDate: string;
  discount = 20;
  items: any[] = [
    { id: 1, name: 'iPhone X', desc: 'Refurbished iPhone X 2019', price: 399 },
    { id: 2, name: 'iPhone 11 Pro', desc: 'The latest iPhone series', price: 1099 },
    { id: 3, name: 'Samsung S20', desc: 'The latest Samsung Galaxy S series in 2020', price: 1199 },
    { id: 4, name: 'Asus ROG Phone 2', desc: 'The gaming phone from Asus', price: 599 },
    { id: 5, name: 'Nokia 9', desc: 'The latest Nokia phone in 2020', price: 799 },
  ];
  selected: string;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.simpleDate = this.datePipe.transform(this.date, 'short');
  }

  ngOnChanges(): void {
    this.updateDate();
  }

  updateDate() {
    this.date = new Date();
    this.simpleDate = this.datePipe.transform(this.date, 'short');
  }

  selectData(item: any) {
    alert(`ID: ${item.id}, Name: ${item.name}, Desc: ${item.desc}, Price: ${item.price}`);
  }

  hoverRow(event: any) {
    this.selected = event.target.innerText;
  }

}
