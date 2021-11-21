import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    CoreModule,
  ],
  exports:[]
})
export class WebModule { }
