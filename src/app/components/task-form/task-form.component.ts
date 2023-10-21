import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  POSSIBLE_STATUS_COLOR,
  POSSIBLE_TASK_STATUS,
  TaskRowInfo,
} from '../tarefa-lista-component/interfaces';
import { TarefaService } from 'src/app/services/tarefa-service.service';
import * as dayjs from 'dayjs';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  constructor(private todoListService: TarefaService) {}

  ngOnInit(): void {}

  applyForm = new FormGroup({
    task: new FormControl(''),
    cpf: new FormControl(''),
    responsible: new FormControl(''),
    dueDate: new FormControl(''),
    status: new FormControl(POSSIBLE_TASK_STATUS.OPEN),
    statusColor: new FormControl(POSSIBLE_STATUS_COLOR.INFO),
  });

  options: string[] = [];

  onSubmit() {
    const { task, cpf, responsible, dueDate, status, statusColor } =
      this.applyForm.value;

    this.todoListService.addNewTodo({
      task: task ?? '',
      cpf: cpf ?? '',
      responsible: responsible ?? '',
      dueDate: dueDate ? dayjs(dueDate as Date).format('DD/MM/YY') : '',
      status: status ?? POSSIBLE_TASK_STATUS.OPEN,
      statusColor: statusColor ?? POSSIBLE_STATUS_COLOR.INFO,
    });

    this.applyForm = new FormGroup({
      task: new FormControl(''),
      cpf: new FormControl(''),
      responsible: new FormControl(''),
      dueDate: new FormControl(''),
      status: new FormControl(POSSIBLE_TASK_STATUS.OPEN),
      statusColor: new FormControl(POSSIBLE_STATUS_COLOR.INFO),
    });
  }
}
