import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { MaterialModule } from 'src/app/material.module';
import { RelatedComponent } from 'src/app/components/related/related.component';


@NgModule({
  declarations: [
    DetailComponent,
    RelatedComponent,
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    MaterialModule
  ]
})
export class DetailModule { }
