import { Component, OnInit } from '@angular/core';
import { Author } from '../author.interface';
import { AutorService } from '../autor-service.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css'],
})
export class AuthorFormComponent implements OnInit {
  public autor: Author = {
    nombre: '',
    apellido: '',
    cedula: 0,
    fechaNacimiento: new Date(),
    generoLiterario: '',
  };

  public generos = [
    'Narrativo',
    'Lírico',
    'Dramático',
    'Didáctico',
    'Épica',
    'Epopeya',
    'Cuento',
    'Novela',
    'Fábula',
    'Ensayo',
    'Biografía',
    'Crónica',
    'Memoria escrita',
  ];

  public onSubmit() {
    alert('Autor exitosamente agregado');
    this._autorService.authors.push({ ...this.autor });
    console.log(this._autorService.authors);
  }

  constructor(private _autorService: AutorService) {}

  ngOnInit(): void {}
}
