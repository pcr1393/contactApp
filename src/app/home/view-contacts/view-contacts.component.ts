import { Component, OnInit } from '@angular/core';
import { contact } from 'src/app/Models/contact.model';
import { Router } from '@angular/router';
import { ContactListService } from 'src/app/Services/contact-list.service';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css']
})
export class ViewContactsComponent implements OnInit {

  contacts: contact[];
  //
  queryString: string;
  contactIndexToBeDeleted: number;
  constructor(private router: Router, private contactListService: ContactListService) { }

  ngOnInit() {

    this.contactListService.getAllContacts().subscribe(
      data => {
        this.contacts = data;
        this.contactListService.setAllContacts(data);
      }
    );
  }

  deleteContact(){
    this.contacts.splice(this.contactIndexToBeDeleted, 1);
  }

  storeContactIndex(index){
    this.contactIndexToBeDeleted = index;
  }

  removeDeletionIndex(){
    this.contactIndexToBeDeleted = undefined;
  }

  addContact(){
    this.contactListService.actionChosen('Add');
    this.router.navigate(['addOrEdit']);
  }

  editContact(contact, index){
    this.contactListService.setContactDetails(contact);
    this.contactListService.setContactIndexForEditing(index);
    this.contactListService.actionChosen('Edit');
    this.router.navigate(['addOrEdit']);
  }


}
