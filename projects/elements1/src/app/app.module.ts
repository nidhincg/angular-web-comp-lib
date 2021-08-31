import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { MyLib1Component, MyLib1Module } from 'my-lib1';

import {ButtonModule} from 'primeng/button';
import { StyleAddComponent } from './style-add/style-add.component';


@NgModule({
  declarations: [
    
  
    StyleAddComponent
  ],
  imports: [
    BrowserModule,
    MyLib1Module,
    ButtonModule
  ],
  providers: []
})
export class AppModule { 
  constructor(public injector : Injector) {
    const element = createCustomElement(StyleAddComponent, { injector: this.injector })
      if(!customElements.get('my-lib1')) {
        customElements.define("my-lib1", element);
      }
  }

  ngDoBootstrap(){
    
      
    
  }
}
