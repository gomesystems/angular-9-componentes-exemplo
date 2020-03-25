import { Component, OnInit } from '@angular/core';
import { DiscService } from '../disc.service';
import { DiscItem } from '../disc-item';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  items: DiscItem[];

  constructor(private discService: DiscService) {}

  ngOnInit() {
    this.items = this.discService.getDiscs();
  }

}
