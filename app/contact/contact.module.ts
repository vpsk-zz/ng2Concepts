import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { SharedModule }            from '../shared/shared.module';
import
       { ContactComponent }   from './contact.component';
import { ContactService }     from './contact.service';
import { routing }            from './contact.routing';

@NgModule({
  imports:      [ CommonModule, FormsModule,routing,SharedModule ],
  declarations: [ ContactComponent ],
  exports:      [ ContactComponent ],
  providers:    [ ContactService ]
})
export class ContactModule { }
