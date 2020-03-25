import { Injectable } from '@angular/core';
import { ProductDiscComponent } from './product-disc/product-disc.component';
import { NewPriceComponent } from './new-price/new-price.component';
import { DiscItem } from './disc-item';

@Injectable({
  providedIn: 'root'
})
export class DiscService {

  getDiscs() {
    return [
      new DiscItem(ProductDiscComponent, {discTitle: 'Old iPhone Discount',
      discBody: 'Discount up to 60% for an old iPhone 6 to X series!'}),
      new DiscItem(ProductDiscComponent, {discTitle: 'Buy 3 Get 1', discBody: 'Buy 3 Smartphone get 1 Handphone'}),
      new DiscItem(NewPriceComponent, {item: 'Asus ROG Phone 2', oldPrice: 499, newPrice: 399}),
      new DiscItem(NewPriceComponent, {item: 'Asus ROG Phone 2', oldPrice: 499, newPrice: 399}),
    ];
  }
}
