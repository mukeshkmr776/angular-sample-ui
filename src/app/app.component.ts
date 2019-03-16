import { AfterViewInit, Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoadingBarService } from 'ngx-loading-bar';
import { Animations } from './animations/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: Animations
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
