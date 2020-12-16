import { Pipe, PipeTransform } from '@angular/core';
import { ContactsService, IContact } from './shared/services/contacts.service';

@Pipe({
  name: 'namelist'
})
export class NamelistPipe implements PipeTransform {

  
  transform(contacts: IContact[], searchTerm: string):IContact[] {
    if (!contacts || !searchTerm) {
        return contacts;
    }

    return contacts.filter(contacts =>
        contacts.name.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1);
  }
}
