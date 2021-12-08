import { Component, OnInit } from '@angular/core';
import { Author } from '../author.interface';
import { AutorService } from '../autor-service.service';
import { Book } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {
  public book: Book = {
    nombre: '',
    annoCreacion: 0,
    generoLibro: '',
    autor: '',
  };

  public autores: Array<Author> = [];

  public onSubmit() {
    console.log(this.book);
    this._bookService.books.push({ ...this.book });
    alert('Libro exitosamente Creado');
    console.log(this._bookService.books);
  }

  constructor(
    private _autorService: AutorService,
    private _bookService: BookService
  ) {
    this.autores = this._autorService.authors;
  }

  ngOnInit(): void {}
}
