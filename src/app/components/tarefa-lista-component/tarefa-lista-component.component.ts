import { Component, OnInit } from '@angular/core';
import { MOCK_DATA } from './interfaces/mockData';

@Component({
  selector: 'app-tarefa-lista-component',
  templateUrl: './tarefa-lista-component.component.html',
  styleUrls: ['./tarefa-lista-component.component.css'],
})
export class TarefaListaComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayedColumns: string[] = [
    'checkbox',
    'task',
    'cpf',
    'responsible',
    'dueDate',
    'status',
  ];
  dataSource = MOCK_DATA;
}
