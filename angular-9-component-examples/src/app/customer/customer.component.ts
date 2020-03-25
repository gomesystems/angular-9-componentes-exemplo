import { Component, Input, OnDestroy } from '@angular/core';
import { OrderService } from '../order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnDestroy {

  @Input() item: string;
  order = '<no order is ready>';
  confirmed = false;
  ready = false;
  subscription: Subscription;

  constructor(private orderService: OrderService) {
    this.subscription = orderService.createOrder.subscribe(
      order => {
        this.order = order;
        this.ready = true;
        this.confirmed = false;
    });
  }

  confirm() {
    this.confirmed = true;
    this.orderService.newOrder(this.item);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
