import { Component } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  items = ['iPhone X', 'Samsung S20', 'Asus ROG Phone 2'];
  history: string[] = [];
  orders = ['Buy iPhone X',
              'Buy Samsung S20',
              'Buy Asus ROG Phone 2'];
  nextOrder = 0;

  constructor(private orderService: OrderService) {
    orderService.orderConfirmed.subscribe(
      customer => {
        this.history.push(`${customer} confirmed new order`);
      });
  }

  orderReady() {
    const order = this.orders[this.nextOrder++];
    this.orderService.readyToOrder(order);
    this.history.push(`Order "${order}" ready`);
    if (this.nextOrder >= this.orders.length) { this.nextOrder = 0; }
  }

}
