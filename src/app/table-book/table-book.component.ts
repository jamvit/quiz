import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../author.interface';
import { Book } from '../book.interface';
import { BookService } from '../book.service';
import { AutorService } from '../autor-service.service';

@Component({
  selector: 'app-table-book',
  templateUrl: './table-book.component.html',
  styleUrls: ['./table-book.component.css'],
})
export class TableBookComponent implements OnInit {
  public bookTable: Array<Book> = [];

  constructor(
    private _bookService: BookService,
    private _autorService: AutorService
  ) {
    this.bookTable = this._bookService.books;
  }

  ngOnInit(): void {}
}
