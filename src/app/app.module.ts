import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/components/material/material.module';
import { AppRoutingModule } from './app-routing.module';


// Services
// import { PageTitleService } from './shared/services/page-title.service';
import { ContactsService } from './shared/services/contacts.service';

// Components
import { AppComponent } from './app.component';

import { AddContactComponent } from './shared/components/add-contact/add-contact.component';


import { NamelistPipe } from './namelist.pipe';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    
    AddContactComponent,
    
  
    NamelistPipe,
    ListComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    
    AppRoutingModule
  ],
  providers: [
    // PageTitleService,
    ContactsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddContactComponent]
})
export class AppModule {}
