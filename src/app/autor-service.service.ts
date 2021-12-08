import { Injectable } from '@angular/core';
import { Author } from './author.interface';

@Injectable({
  providedIn: 'root',
})
export class AutorService {
  public authors: Array<Author> = [];

  constructor() {}
}
