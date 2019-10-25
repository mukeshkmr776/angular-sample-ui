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
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatRippleModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatRippleModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule
  ]
})
export class MaterialModule {}
