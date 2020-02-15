import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ]
})
export class AppMaterialModule {}
