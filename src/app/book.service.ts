import { Injectable } from '@angular/core';
import { Book } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  public books: Array<Book> = [];

  constructor() {}
}
