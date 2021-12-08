import { Component, OnInit } from '@angular/core';
import { Author } from '../author.interface';
import { AutorService } from '../autor-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  public authorsTable: Array<Author> = [];

  public onClick() {}

  constructor(private _autorService: AutorService) {
    this.authorsTable = this._autorService.authors;
  }

  ngOnInit(): void {}
}
