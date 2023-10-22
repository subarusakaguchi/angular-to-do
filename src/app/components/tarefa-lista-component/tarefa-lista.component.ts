import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TarefaService } from 'src/app/services/tarefa/tarefa.service';
import { FilterValues, ISelectOption, TaskRowInfo } from './interfaces';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-tarefa-lista',
  templateUrl: './tarefa-lista.component.html',
  styleUrls: ['./tarefa-lista.component.css'],
})
export class TarefaListaComponent implements OnInit {
  @Input() dataSource: TaskRowInfo[];
  @ViewChild(MatTable) table!: MatTable<any>;

  filterOptions: ISelectOption[] = [
    { value: 'all', viewValue: 'TODAS' },
    { value: 'closed', viewValue: 'CONCLUÍDAS' },
    { value: 'not_closed', viewValue: 'NÃO CONCLUÍDAS' },
  ];

  displayedColumns: string[] = [
    'remove',
    'checkbox',
    'task',
    'cpf',
    'responsible',
    'dueDate',
    'status',
  ];

  constructor(private todoListService: TarefaService) {
    this.dataSource = this.todoListService.listToDos();
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.dataSource && this.table) {
      this.table.renderRows();
    }
  }

  handleCheckbox(id: number) {
    const newDataSource = this.todoListService.changeCheckBoxStatus(id);

    if (newDataSource) {
      this.dataSource = newDataSource;
    }
  }

  removeRow(id: number) {
    const newTodoList = this.todoListService.removeTodo(id);

    this.dataSource = newTodoList;

    this.table.renderRows();
  }

  handleTaskFilter(filterValue: FilterValues) {
    let newDataSource = this.dataSource;

    if (filterValue === 'all') {
      newDataSource = [...this.todoListService.filterByAll()];
    } else if (filterValue === 'closed') {
      newDataSource = [...this.todoListService.filterByClosed()];
    } else if (filterValue === 'not_closed') {
      newDataSource = [...this.todoListService.filterByNotClosed()];
    }

    this.dataSource = newDataSource;
  }
}
