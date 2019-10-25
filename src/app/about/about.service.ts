import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AboutComponent } from './about.component';
import { FAQComponent } from './FAQComponent';

@Injectable()
export class AboutService {

  constructor(public dialog: MatDialog) { }

  openAbout() {
    this.dialog.open(AboutComponent);
  }

  openFAQ() {
    this.dialog.open(FAQComponent);
  }

}
