import { Component } from '@angular/core';
import { ObjectValues } from 'src/utils/objectValue';
import * as dayjs from 'dayjs';
import { FormControl } from '@angular/forms';

const POSSIBLE_TASK_STATUS = {
  OPEN: 'Aberto',
  CLOSED: 'Concluído',
  EXPIRED: 'Expirado',
} as const;

const POSSIBLE_STATUS_COLOR = {
  INFO: 'info',
  SUCCESS: 'success',
  WARN: 'warn',
} as const;

type TaskStatus = ObjectValues<typeof POSSIBLE_TASK_STATUS>;

type TaskStatusColor = ObjectValues<typeof POSSIBLE_STATUS_COLOR>;

export interface TaskRowInfo {
  task: string;
  cpf: string;
  responsible: string;
  dueDate: string;
  status: TaskStatus;
  statusColor: TaskStatusColor;
}

const ELEMENT_DATA: TaskRowInfo[] = [
  {
    task: 'Primeira tarefa',
    cpf: '123.456.789-00',
    responsible: 'Subaru',
    dueDate: dayjs().format('DD/MM/YYYY - HH:mm:ss'),
    status: 'Aberto',
    statusColor: 'info',
  },
  {
    task: 'Segunda tarefa',
    cpf: '123.456.789-00',
    responsible: 'Subaru',
    dueDate: dayjs().format('DD/MM/YYYY - HH:mm:ss'),
    status: 'Concluído',
    statusColor: 'success',
  },
  {
    task: 'Terceira tarefa',
    cpf: '123.456.789-00',
    responsible: 'Subaru',
    dueDate: dayjs().format('DD/MM/YYYY - HH:mm:ss'),
    status: 'Expirado',
    statusColor: 'warn',
  },
  {
    task: 'Quarta tarefa',
    cpf: '123.456.789-00',
    responsible: 'Subaru',
    dueDate: dayjs().format('DD/MM/YYYY - HH:mm:ss'),
    status: 'Aberto',
    statusColor: 'info',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do-list';
  displayedColumns: string[] = [
    'checkbox',
    'task',
    'cpf',
    'responsible',
    'dueDate',
    'status',
  ];
  dataSource = ELEMENT_DATA;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
