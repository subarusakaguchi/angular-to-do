import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TarefaService } from 'src/app/services/tarefa-service.service';
import { TaskRowInfo } from './interfaces';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-tarefa-lista',
  templateUrl: './tarefa-lista.component.html',
  styleUrls: ['./tarefa-lista.component.css'],
})
export class TarefaListaComponent implements OnInit {
  @Input() dataSource: TaskRowInfo[];
  @ViewChild(MatTable) table!: MatTable<any>;

  displayedColumns: string[] = [
    'checkbox',
    'task',
    'cpf',
    'responsible',
    'dueDate',
    'status',
    'remove',
  ];

  constructor(private todoListService: TarefaService) {
    this.dataSource = this.todoListService.listToDos();
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.dataSource) {
      this.table.renderRows();
    }
  }

  handleCheckbox(id: number) {
    this.todoListService.changeCheckBoxStatus(id);
  }

  removeRow(id: number) {
    const newTodoList = this.todoListService.removeTodo(id);

    this.dataSource = newTodoList;

    this.table.renderRows();
  }
}
