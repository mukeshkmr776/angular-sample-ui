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
  pages = [
    {
      name: 'Status',
      link: 'status',
      icon: 'network_check',
      selected: true,
    },
    {
      name: 'Find Networks',
      link: 'find-it',
      icon: 'network_check',
      selected: false,
    },
    {
      name: 'Account',
      link: 'account',
      icon: 'people',
      selected: false,
    },
    {
      name: 'Wallet',
      link: 'wallet',
      icon: 'account_balance_wallet',
      selected: false,
    },
  ];

  @ViewChild('sidenav', {static: true}) sidenav;

  constructor(fb: FormBuilder, private toggleTree: TreeService, private dataService: DataService) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 50
    });
  }

  ngOnInit() {
    this.toggleTree.message$.subscribe( value => {
      if (this.sidenav) {
        this.sidenav.toggle();
      }
    });
  }

  showPage(page: any) {
    this.pages.forEach(p => p.selected = false);
    page.selected = true;
    console.log(page);
  }

}
