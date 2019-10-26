import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatRippleModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatTabsModule
} from '@angular/material';

let modules = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatRippleModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatTabsModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
