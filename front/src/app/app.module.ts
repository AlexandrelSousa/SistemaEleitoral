import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersGetComponent } from './users-get/users-get.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersAddComponent,
    UsersEditComponent,
    UsersGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
