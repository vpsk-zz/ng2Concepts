import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HighlightDirective }  from './highlight.directive';
import { TitleComponent }  from './title.component';

import { UserService } from './user.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,HighlightDirective,TitleComponent ],
  bootstrap: [ AppComponent ],
  providers: [ UserService ],
})
export class AppModule { }
