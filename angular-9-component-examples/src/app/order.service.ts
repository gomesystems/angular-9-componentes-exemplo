import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // Observable string sources
  private createOrderSource = new Subject<string>();
  private orderConfirmedSource = new Subject<string>();

  // Observable string streams
  createOrder = this.createOrderSource.asObservable();
  orderConfirmed = this.orderConfirmedSource.asObservable();

  // Service message commands
  readyToOrder(item: string) {
    this.createOrderSource.next(item);
  }

  newOrder(customer: string) {
    this.orderConfirmedSource.next(customer);
  }
}
