import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  headerOptions: Array<object> = [
    { name: 'Home', url: '/home' },
    { name: 'View', url: '/view/5' }
  ];

  active = false;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.active = !this.active;
    }, 1000);
  }

}
