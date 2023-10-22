import { Injectable } from '@angular/core';
import { MOCK_DATA } from '../components/tarefa-lista-component/interfaces/mockData';
import {
  POSSIBLE_STATUS_COLOR,
  POSSIBLE_TASK_STATUS,
  TaskRowInfo,
} from '../components/tarefa-lista-component/interfaces';

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

  changeCheckBoxStatus(id: number): TaskRowInfo[] | void {
    const updatedTodo = this.list.find((item) => item.taskId === id);

    if (updatedTodo) {
      if (updatedTodo.isCompleted) {
        updatedTodo.isCompleted = !updatedTodo.isCompleted;
        updatedTodo.status = POSSIBLE_TASK_STATUS.OPEN;
        updatedTodo.statusColor = POSSIBLE_STATUS_COLOR.INFO;
      } else {
        updatedTodo.isCompleted = !updatedTodo.isCompleted;
        updatedTodo.status = POSSIBLE_TASK_STATUS.CLOSED;
        updatedTodo.statusColor = POSSIBLE_STATUS_COLOR.SUCCESS;
      }

      const newTodoList = this.updateTodo(updatedTodo);

      if (newTodoList) {
        return newTodoList;
      }
    }
  }

  updateTodo(updatedTodo: TaskRowInfo): TaskRowInfo[] | void {
    const taskIndex = this.list.findIndex(
      (item) => item.taskId === updatedTodo.taskId
    );

    if (taskIndex > -1) {
      this.list.splice(taskIndex, 1, updatedTodo);

      const newTodoList = [...this.list];

      this.list = newTodoList;

      return this.list;
    }
  }
}
