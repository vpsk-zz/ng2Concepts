import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { ContactModule } from './contact/contact.module';

import { AppComponent }  from './app.component';
import { HighlightDirective }  from './highlight.directive';

import { routing }            from './app.routing';
import { CoreModule }     from './core/core.module';

@NgModule({
  imports: [ BrowserModule,ContactModule,routing,CoreModule],
  declarations: [ AppComponent,HighlightDirective],
  bootstrap: [ AppComponent ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
