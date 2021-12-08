import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { BookFormComponent } from './book-form/book-form.component';
import { TableComponent } from './table/table.component';
import { TableBookComponent } from './table-book/table-book.component';

@NgModule({
  declarations: [AppComponent, AuthorFormComponent, BookFormComponent, TableComponent, TableBookComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
