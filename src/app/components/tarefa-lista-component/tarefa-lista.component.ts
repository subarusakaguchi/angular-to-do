import { Component, OnInit, ViewChild } from '@angular/core';
import { MOCK_DATA } from './interfaces/mockData';
import { TarefaService } from 'src/app/services/tarefa-service.service';
import { TaskRowInfo } from './interfaces';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-tarefa-lista',
  templateUrl: './tarefa-lista.component.html',
  styleUrls: ['./tarefa-lista.component.css'],
})
export class TarefaListaComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>;

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
