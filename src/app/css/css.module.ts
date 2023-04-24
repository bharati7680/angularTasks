import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CSSRoutingModule } from './css-routing.module';
import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    CSSRoutingModule
  ]
})
export class CSSModule { }
