import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TreeService } from '../services/tree.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  title = 'sample-app';
  options: FormGroup;

  @ViewChild('sidenav', {static: true}) sidenav;

  constructor(fb: FormBuilder, private toggleTree: TreeService) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 64
    });
  }

  ngOnInit() {
    this.toggleTree.message$.subscribe( value => {
      if (this.sidenav) {
        this.sidenav.toggle();
      }
    });
  }

}
