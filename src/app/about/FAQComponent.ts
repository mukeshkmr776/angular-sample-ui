import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  template: `<h2>Frequently asked questions</h2>
            <mat-accordion>
              <mat-expansion-panel>
                <mat-expansion-panel-header>
                  <mat-panel-title>
                    What is PowerHA?
                  </mat-panel-title>
                </mat-expansion-panel-header>
                <p>PowerHA is lorem ipsum lorem ipsum...</p>
              </mat-expansion-panel>
              <mat-expansion-panel>
                <mat-expansion-panel-header>
                  <mat-panel-title>
                    Features of PowerHA
                  </mat-panel-title>
                </mat-expansion-panel-header>
                <p>Coming soon...</p>
              </mat-expansion-panel>
            </mat-accordion>`,
  styles: []
})
export class FAQComponent {
  constructor() { }
}
