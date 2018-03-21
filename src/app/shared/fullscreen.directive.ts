import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[shanthFullscreen]'
})
export class FullscreenDirective {

  constructor() { }
  
  @HostListener('dragenter', ['$event'])
  onDragEnter(event) {
    console.log(event)
  }

}
