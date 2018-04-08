import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';

import { TopNavigationComponent } from './top-navigation/top-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatToolbarModule
  ],
  declarations: [TopNavigationComponent],
  exports: [TopNavigationComponent]
})
export class LayoutModule { }
