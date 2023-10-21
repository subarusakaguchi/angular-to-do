import { Component, OnInit } from '@angular/core';
import { MOCK_DATA } from './interfaces/mockData';
import { TarefaService } from 'src/app/services/tarefa-service.service';
import { TaskRowInfo } from './interfaces';

@Component({
  selector: 'app-tarefa-lista',
  templateUrl: './tarefa-lista.component.html',
  styleUrls: ['./tarefa-lista.component.css'],
})
export class TarefaListaComponent implements OnInit {
  displayedColumns: string[] = [
    'checkbox',
    'task',
    'cpf',
    'responsible',
    'dueDate',
    'status',
  ];

  dataSource: TaskRowInfo[] = [];

  constructor(private todoListService: TarefaService) {}

  ngOnInit(): void {
    this.dataSource = this.todoListService.listToDos();
  }
}
