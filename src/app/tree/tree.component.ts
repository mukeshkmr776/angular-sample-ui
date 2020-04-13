import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.less']
})
export class TreeComponent implements OnInit, OnDestroy {

  @Input() isUnassigned?: boolean;
  @Input() item: any;

  padding: number;
  selected: boolean;
  message$: Subscription;

  isGathering: boolean;
  isGatheringInterval: any;

  ICONS_ENUM: object = {
    icon_normal: 'Normal',
    icon_critical: 'Critical',
    icon_warning: 'Warning',
    icon_maintenance: 'Maintenance'
  };

  constructor(private _router: Router) { }

  ngOnInit() {
    this.isGathering = false;
    this.selected = false;

    switch (this.item.type) {
      case 'zone':
        this.padding = 0;
        break;
      case 'cluster':
        this.padding = 30;
        break;
      case 'node':
        this.padding = 60;
        break;
      case 'rg'  :
        this.padding = 90;
        break;
      default:
        this.padding = 0;
        break;
    }

    if (this.isUnassigned) {
      this.padding -= 25;
    }
  }

  // subscribe() {
  //   if (this.message$) {
  //     this.message$.unsubscribe();
  //   }

  //   this.message$ = this.subscription.message.subscribe(notification => {
  //     console.log(notification);

  //     // This should be the last line in this block. Don't change it's position.
  //     this.message$.unsubscribe();
  //   });
  // }

  toggleExpand(item: any) {
    if (this.item.type !== 'node') {
      this.item.expand = item.expand ? false : true;
      return;
    }

    if (this.item.expand) {
      this.item.expand = false;
      return;
    }

    this.isGathering = true;
    this.isGatheringInterval = setTimeout(() => {
      this.isGathering = false;
      this.item.expand = true;
      this.isGatheringInterval = null;
    }, 2000);

  }

  selectItem(item: any) {
    // this.selected = !this.selected;
    // this.toggleExpand(item);
    let url = '';
    switch (this.item.type) {
      case 'zone':
        url = `/home/zone/`;
        break;
      case 'cluster':
        url = `/home/cluster/${this.item.clusterId}`;
        break;
      case 'node':
        url = `/home/cluster/${this.item.clusterId}/node/${this.item.name}`;
        break;
      default:
        break;
    }
    this._router.navigateByUrl(url);
  }

  openPopover(item: any, popover: any) {
    if (popover.isOpen()) {
      popover.close();
    } else {
      // this.subscribe();
      popover.open({name: item.name});
    }
  }

  onCancel() {
    if (this.isGatheringInterval) {
      clearTimeout(this.isGatheringInterval);
      this.isGatheringInterval = null;
    }
    this.isGathering = false;
  }

  ngOnDestroy() {
    if (this.message$) {
      this.message$.unsubscribe();
    }

    if (this.isGatheringInterval) {
      clearTimeout(this.isGatheringInterval);
    }
  }

}
