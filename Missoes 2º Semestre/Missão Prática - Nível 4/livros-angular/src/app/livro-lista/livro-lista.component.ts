import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  template: `
    <h2>Editoras:</h2>
    <ul>
      <li *ngFor="let editora of editoras">{{ editora.nome }}</li>
    </ul>
    <h2>Livros:</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Título</th>
          <th>Resumo</th>
          <th>Autores</th>
          <th>Editora</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let livro of livros">
          <td>{{ livro.codigo }}</td>
          <td>{{ livro.titulo }}</td>
          <td>{{ livro.resumo }}</td>
          <td>{{ livro.autores.join(', ') }}</td>
          <td>{{ obterNome(livro.codEditora) }}</td>
          <td>
            <button class="btn btn-danger" (click)="excluir(livro.codigo)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  `
})
export class LivroListaComponent implements OnInit {
  editoras: Array<Editora> = [];
  livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir(codigo: number): void {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  }

  obterNome(codEditora: number): string {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
