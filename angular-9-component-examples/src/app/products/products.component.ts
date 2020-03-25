import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  @Input()  product: any;
  @Output() prodDet = new EventEmitter<boolean>();

  showDetails(prod: any) {
    this.prodDet.emit(prod);
  }

}
