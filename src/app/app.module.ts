import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactPipe } from './Filters/contact.pipe';
import { HomeComponent } from './home/home.component';
import { ViewContactsComponent } from './home/view-contacts/view-contacts.component';
import { AddEditContactComponent } from './home/add-edit-contact/add-edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPipe,
    HomeComponent,
    ViewContactsComponent,
    AddEditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
