import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { from } from 'rxjs';
import { delay, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-cluster-view',
  templateUrl: './cluster-view.component.html',
  styleUrls: ['./cluster-view.component.less']
})
export class ClusterViewComponent implements OnInit {

  clusterId;

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
  noOfTimes = [];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((value: any) => { this.clusterId = value.clusterId; });
  }

  ngOnInit() {
    this.setView(this.VIEW_TYPES.EVENT);

    // Just to print Large text
    for (let x = 0 ; x < 500; x++) { this.noOfTimes.push(0); }
  }

  setView(viewBox: any) {
    if (this.selectedViewType !== viewBox) {
      this.isLoading = true;
      this.selectedViewType = viewBox;
      from([viewBox]).pipe(distinctUntilChanged()).pipe(delay(5000)).subscribe((item) => {
        this.isLoading = false;
      });
    }
  }

}
