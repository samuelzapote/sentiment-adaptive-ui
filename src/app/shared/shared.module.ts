import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { LoadSceneComponent } from './load-scene/load-scene.component';

@NgModule({
  declarations: [
    LoadSceneComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule,
    LoadSceneComponent
  ]
})
export class SharedModule { }
