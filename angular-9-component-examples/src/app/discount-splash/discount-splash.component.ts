import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { DiscDirective } from '../disc.directive';
import { DiscItem } from '../disc-item';
import { DiscComponent } from '../disc.component';

@Component({
  selector: 'app-discount-splash',
  templateUrl: './discount-splash.component.html',
  styleUrls: ['./discount-splash.component.css']
})
export class DiscountSplashComponent implements OnInit, OnDestroy {

  @Input() items: DiscItem[];
  currentDiscIndex = -1;
  @ViewChild(DiscDirective, {static: true}) discHost: DiscDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getDiscs();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentDiscIndex = (this.currentDiscIndex + 1) % this.items.length;
    const discItem = this.items[this.currentDiscIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(discItem.component);

    const viewContainerRef = this.discHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as DiscComponent).data = discItem.data;
  }

  getDiscs() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
