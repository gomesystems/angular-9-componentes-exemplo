import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  productName = '';
  productDesc = '';
  productPrice = null;
  products: any[] = [
    { productName: 'eMac', productDesc: 'Old Mac computer', productPrice: 39 },
    { productName: 'Power Mac G4', productDesc: 'Old Mac computer with G4 Processor', productPrice: 39 },
    { productName: 'Power Mac G5', productDesc: 'Old Mac computer with G5 Processor', productPrice: 39 }
  ];

  showDetails(prod: any) {
    this.productName = prod.productName;
    this.productDesc = prod.productDesc;
    this.productPrice = prod.productPrice;
  }

}
