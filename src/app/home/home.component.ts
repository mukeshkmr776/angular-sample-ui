import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TreeService } from '../services/tree.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  title = 'sample-app';
  options: FormGroup;

  clusters: Array<any>;
  zones: Array<any>;

  @ViewChild('sidenav', {static: true}) sidenav;

  constructor(fb: FormBuilder, private toggleTree: TreeService, private dataService: DataService) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 50
    });
  }

  ngOnInit() {
    this.clusters = this.dataService.getUnassignedClusters();
    this.zones = this.dataService.getZonedClusters();

    this.toggleTree.message$.subscribe( value => {
      if (this.sidenav) {
        this.sidenav.toggle();
      }
    });
  }

}
