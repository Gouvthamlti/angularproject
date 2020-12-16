import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { MatDialog } from '@angular/material';
// import { AddContactComponent } from '../shared/components/add-contact';
// import { PageTitleService } from '../../shared/services/page-title.service';
// import { IContact, ContactsService } from '../../shared/services/contacts.service';

import { AddContactComponent } from "../shared/components/add-contact/add-contact.component";
import { IContact, ContactsService } from "../shared/services/contacts.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  contacts:IContact[];
  searchTerm:string;

  constructor(
 
    private contactsService: ContactsService,
    public dialog: MatDialog) {
    
   }

  ngOnInit() {
  
    this.contacts = this.contactsService.getContacts();
  }
  delete(contact) {
    this.contacts.splice(this.contacts.indexOf(contact),1);
  }
  add() {
    const dialogRef = this.dialog.open(AddContactComponent);
    dialogRef.afterClosed().subscribe((contact: IContact) => {
      if (contact) {
        this.contacts.push(contact);
      }
    });
  }
 
}
