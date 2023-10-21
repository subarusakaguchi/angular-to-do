import { Injectable } from '@angular/core';
import { MOCK_DATA } from '../components/tarefa-lista-component/interfaces/mockData';
import { TaskRowInfo } from '../components/tarefa-lista-component/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private list: TaskRowInfo[] = MOCK_DATA;

  constructor() {}

  listToDos(): TaskRowInfo[] {
    return this.list;
  }
}
