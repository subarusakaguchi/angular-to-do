import { Injectable, ViewChild } from '@angular/core';
import { MOCK_DATA } from '../components/tarefa-lista-component/interfaces/mockData';
import { TaskRowInfo } from '../components/tarefa-lista-component/interfaces';
import { MatTable } from '@angular/material/table';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private list: TaskRowInfo[] = MOCK_DATA;

  constructor() {}

  listToDos(): TaskRowInfo[] {
    return this.list;
  }

  addNewTodo(newTodo: TaskRowInfo): void {
    const newTodoList = [...this.list, newTodo];

    this.list = newTodoList;
  }
}
