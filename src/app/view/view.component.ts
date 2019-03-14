import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements OnInit {

  id;

  VIEW_TYPES = {
    INFO: 'INFO',
    RG: 'RG',
    STAT: 'STAT',
    LOG: 'LOG',
    EVENT: 'EVENT',
    SETTING: 'SETTING'
  };

  selectedViewType;

  constructor(private route: ActivatedRoute) {
    this.selectedViewType = this.VIEW_TYPES.INFO;
  }

  ngOnInit() {
    this.route.params.subscribe((value: any) => { this.id = value.id; });
  }

}
