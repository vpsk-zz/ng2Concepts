import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactModule } from './contact/contact.module';

import { AppComponent }  from './app.component';
import { HighlightDirective }  from './highlight.directive';
import { TitleComponent }  from './title.component';


import { UserService } from './user.service';

@NgModule({
  imports: [ BrowserModule,ContactModule],
  declarations: [ AppComponent,HighlightDirective,TitleComponent],
  bootstrap: [ AppComponent ],
  providers: [ UserService ],
})
export class AppModule { }
