import { Injectable } from '@angular/core';

export interface IContact {
  name: string;
  number: string;
}

@Injectable()
export class ContactsService {

  
  private readonly contacts: IContact[] = [
    { name: 'Ameet', number: '999-999-9999' },
    { name: 'John', number: '777-777-7777' },
    { name: 'Sanghamitra', number: '111-111-1111'},
    { name: 'Janez', number: '444-444-4444' }
  ];

  getContacts(): IContact[] {
    return this.contacts;
  }

 

}
