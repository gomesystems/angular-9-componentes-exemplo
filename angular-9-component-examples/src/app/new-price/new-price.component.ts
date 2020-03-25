import { Component, Input } from '@angular/core';
import { DiscComponent } from '../disc.component';

@Component({
  selector: 'app-new-price',
  templateUrl: './new-price.component.html',
  styleUrls: ['./new-price.component.css']
})
export class NewPriceComponent implements DiscComponent {

  @Input() data: any;

}
