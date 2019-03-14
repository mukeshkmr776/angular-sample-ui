import { AfterViewInit, Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { animate, query, style, transition, trigger } from '@angular/animations';
import { LoadingBarService } from 'ngx-loading-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('myAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [style({
            opacity: 0
          })], {
            optional: true
          }
        ),
        query(
          ':leave',
          [style({
            opacity: 1
          }), animate('.3s', style({
            opacity: 0
          }))], {
            optional: true
          }
        ),
        query(
          ':enter',
          [style({
            opacity: 0
          }), animate('.3s', style({
            opacity: 1
          }))], {
            optional: true
          }
        )
      ])
    ])
  ]
})
export class AppComponent implements AfterViewInit {
  loading: boolean;
  currentUrl: string;

  constructor(private router: Router, private loadingBarService: LoadingBarService) {
    this.loading = true;
  }


  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loadingBarService.start();
        this.loading = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.currentUrl = event.url;
        this.loading = false;
        this.loadingBarService.complete();
      }
    });
  }

}
