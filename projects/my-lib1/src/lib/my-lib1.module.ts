import { NgModule } from '@angular/core';
import { MyLib1Component } from './my-lib1.component';

import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    MyLib1Component
  ],
  imports: [
    ButtonModule
  ],
  exports: [
    MyLib1Component
  ]
})
export class MyLib1Module { }
