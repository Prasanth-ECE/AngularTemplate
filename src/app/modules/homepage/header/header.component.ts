import { Component, OnInit, Output,EventEmitter, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'shanth-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  screen:boolean = true;
  @Output()
  navtoggle = new EventEmitter();
  constructor(@Inject(DOCUMENT) private document: any) { 
    this.isFullscreen()
  }

  ngOnInit() {
    
  }

  toggleMenu(){
    this.navtoggle.emit()
  }
  fullscreen(){
    //if(this.el.nativeElement.ownerDocument.webkitIsFullScreen == true){
      let elm = this.document.body;
      let requestMethod = elm.requestFullScreen || elm.webkitRequestFullScreen 
      || elm.mozRequestFullScreen || elm.msRequestFullScreen;
  
      if (requestMethod) {
        this.screen = false;
        requestMethod.call(elm);
      }
      else{
        console.log('error')
      }
  }
  cancelfullscreen(){
    if (this.document.webkitCancelFullScreen) {
      this.screen = true;
      document.webkitCancelFullScreen();
    }
  }
  isFullscreen(){
    if(document.webkitIsFullScreen){
      return true;
    }
    else{
      return false;
    }
  }
}
