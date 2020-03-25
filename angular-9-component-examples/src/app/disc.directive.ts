import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisc]'
})
export class DiscDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
