import { Component, Input } from '@angular/core';
import { DiscComponent } from '../disc.component';

@Component({
  selector: 'app-product-disc',
  templateUrl: './product-disc.component.html',
  styleUrls: ['./product-disc.component.css']
})
export class ProductDiscComponent implements DiscComponent {

  @Input() data: any;

}
