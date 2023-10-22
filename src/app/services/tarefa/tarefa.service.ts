import { Injectable } from '@angular/core';
import { MOCK_DATA } from '../../components/tarefa-lista-component/interfaces/mockData';
import {
  FilterValues,
  POSSIBLE_STATUS_COLOR,
  POSSIBLE_TASK_STATUS,
  TaskRowInfo,
} from '../../components/tarefa-lista-component/interfaces';
import { StorageService } from '../storage/storage.service';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private readonly LOCAL_STORAGE_KEY: string = 'ANGULAR12_TODO_PROJECT';
  private list: TaskRowInfo[];
  private statusFilter: FilterValues;

  constructor(private storageService: StorageService) {
    this.list =
      this.storageService.getData(this.LOCAL_STORAGE_KEY) ?? MOCK_DATA;

    this.statusFilter = 'all';
  }

  private saveOnStorage() {
    this.storageService.saveData({
      key: this.LOCAL_STORAGE_KEY,
      data: this.list,
    });
  }

  private getOnStorage() {
    const updatedList = this.storageService.getData(this.LOCAL_STORAGE_KEY) as
      | TaskRowInfo[]
      | undefined;

    this.list = updatedList ?? [];
  }

  private checkDataDatesAndUpdate(withUpdate: boolean) {
    if (withUpdate) this.getOnStorage();

    const updatedList = this.list.map((item) => {
      const dateSplit = item.dueDate.split('/');

      const referenceDueDate = dayjs(
        `${dateSplit[1]}/${dateSplit[0]}/${dateSplit[2]}`
      );

      if (dayjs().isAfter(referenceDueDate) && item.status !== 'Concluído') {
        item.status = 'Expirado';
        item.statusColor = 'warn';
      }

      return item;
    });

    const newToDoList = [...updatedList];

    this.list = newToDoList;
  }

  listToDos(): TaskRowInfo[] {
    this.checkDataDatesAndUpdate(true);
    return this.list;
  }

  addNewTodo(newTodo: TaskRowInfo): void {
    this.getOnStorage();

    newTodo.taskId = this.list.length > 0 ? this.list[0].taskId + 1 : 0;

    const newTodoList = [...this.list, newTodo];

    newTodoList.sort((a, b) => {
      return b.taskId - a.taskId;
    });

    this.list = newTodoList;

    this.checkDataDatesAndUpdate(false);

    this.saveOnStorage();

    this.filterByCurrentStatus();
  }

  removeTodo(id: number): TaskRowInfo[] {
    this.getOnStorage();

    const filteredList = this.list.filter((item) => item.taskId !== id);

    const newTodoList = [...filteredList];

    this.list = newTodoList;

    this.saveOnStorage();

    this.filterByCurrentStatus();

    return this.list;
  }

  changeCheckBoxStatus(id: number): TaskRowInfo[] | void {
    this.getOnStorage();

    const updatedTodo = this.list.find((item) => item.taskId === id);

    if (updatedTodo) {
      const dateSplit = updatedTodo.dueDate.split('/');

      const referenceDueDate = dayjs(
        `${dateSplit[1]}/${dateSplit[0]}/${dateSplit[2]}`
      );

      if (updatedTodo.isCompleted) {
        if (dayjs().isAfter(referenceDueDate)) {
          updatedTodo.isCompleted = false;
          updatedTodo.status = POSSIBLE_TASK_STATUS.EXPIRED;
          updatedTodo.statusColor = POSSIBLE_STATUS_COLOR.WARN;
        } else {
          updatedTodo.isCompleted = false;
          updatedTodo.status = POSSIBLE_TASK_STATUS.OPEN;
          updatedTodo.statusColor = POSSIBLE_STATUS_COLOR.SECONDARY;
        }
      } else {
        updatedTodo.isCompleted = true;
        updatedTodo.status = POSSIBLE_TASK_STATUS.CLOSED;
        updatedTodo.statusColor = POSSIBLE_STATUS_COLOR.PRIMARY;
      }

      const updatedList = this.updateTodo(updatedTodo);

      if (updatedList) {
        return updatedList;
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

      this.saveOnStorage();

      this.filterByCurrentStatus();

      return this.list;
    }
  }

  private filterByCurrentStatus() {
    let newTodoList = this.list;

    if (this.statusFilter === 'all') {
      newTodoList = [...this.filterByAll()];
    } else if (this.statusFilter === 'closed') {
      newTodoList = [...this.filterByClosed()];
    } else if (this.statusFilter === 'not_closed') {
      newTodoList = [...this.filterByNotClosed()];
    }

    this.list = newTodoList;
  }

  filterByClosed(): TaskRowInfo[] {
    this.getOnStorage();

    this.list = this.list.filter((item) => item.isCompleted);

    this.statusFilter = 'closed';

    return this.list;
  }

  filterByNotClosed(): TaskRowInfo[] {
    this.getOnStorage();

    this.list = this.list.filter((item) => !item.isCompleted);

    this.statusFilter = 'not_closed';

    return this.list;
  }

  filterByAll(): TaskRowInfo[] {
    this.getOnStorage();

    this.statusFilter = 'all';

    return this.list;
  }
}
