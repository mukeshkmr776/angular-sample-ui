import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeIn } from 'src/app/animations/fadeIn';
import { trigger } from '@angular/animations';
import { from, Observable } from 'rxjs';
import { delay, take } from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less'],
  animations: [trigger('fadeIn', fadeIn())]
})
export class ViewComponent implements OnInit {

  id;

  VIEW_TYPES = {
    INFO: 'Information',
    STAT: 'Statistics',
    LOG: 'Logs',
    EVENT: 'Events',
    RG: 'Resource Groups',
    SETTING: 'Settings'
  };

  selectedViewType;
  isLoading = false;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((value: any) => { this.id = value.id; });
  }
  
  ngOnInit() {
    this.setView(this.VIEW_TYPES.EVENT);
  }

  setView(viewBox: any) {
    if (this.selectedViewType !== viewBox) {
      this.isLoading = true;
      this.selectedViewType = viewBox;
      from([viewBox]).pipe(take(1)).pipe(delay(3000)).subscribe((item) => {
        this.isLoading = false;
      });
    }
  }

}
