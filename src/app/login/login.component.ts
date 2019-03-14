import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit, OnDestroy {

  bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];
  htmlTag: HTMLElement = document.getElementsByTagName('html')[0];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      // add the css-style to the html and body tags
      this.bodyTag.classList.add('login-page');
      this.htmlTag.classList.add('login-page');
    }, 0);
  }

  ngOnDestroy() {
    setTimeout(() => {
      // remove the the body classes
      this.bodyTag.classList.remove('login-page');
      this.htmlTag.classList.remove('login-page');
    }, 0);
  }

}
