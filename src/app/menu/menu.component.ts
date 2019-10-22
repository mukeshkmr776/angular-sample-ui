import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeService } from '../services/tree.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  headerOptions: Array<object> = [
    { name: 'Home', url: '/home' },
    { name: 'ClusterView', url: '/home/view/5' }
  ];

  active = true;

  constructor(private treeService: TreeService) { }

  ngOnInit() { }

  toggleTree() {
    this.treeService.toggleTree();
  }

}
