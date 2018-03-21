import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navBarOpen:boolean = true;
  expandv:boolean = false;

  toggle(){
    this.navBarOpen = !this.navBarOpen;
  }
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  expand(){
    this.expandv = !this.expandv;
  }
}
