import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { from } from 'rxjs';
import { delay, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-node-view',
  templateUrl: './node-view.component.html',
  styleUrls: ['./node-view.component.less']
})
export class NodeViewComponent implements OnInit {

  clusterId;
  nodeName;

  VIEW_TYPES = {
    INFO: 'Information',
    METRIC: 'Metrics',
    RG: 'Resource Groups',
    SETTING: 'Settings'
  };

  selectedViewType;
  isLoading = false;
  noOfTimes = [];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((value: any) => { this.clusterId = value.clusterId; this.nodeName = value.nodeName;});
  }

  ngOnInit() {
    this.setView(this.VIEW_TYPES.INFO);

    // Just to print Large text
    for (let x = 0 ; x < 1000; x++) { this.noOfTimes.push(0); }
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
