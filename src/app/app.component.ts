import { Component } from '@angular/core';
import { ObjectValues } from 'src/utils/objectValue';

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
  dueDate: Date;
  status: TaskStatus;
  statusColor: TaskStatusColor;
}

const ELEMENT_DATA: TaskRowInfo[] = [
  {
    task: 'Primeira tarefa',
    cpf: '123.456.789-00',
    responsible: 'Subaru',
    dueDate: new Date(),
    status: 'Aberto',
    statusColor: 'info',
  },
  {
    task: 'Segunda tarefa',
    cpf: '123.456.789-00',
    responsible: 'Subaru',
    dueDate: new Date(),
    status: 'Concluído',
    statusColor: 'success',
  },
  {
    task: 'Terceira tarefa',
    cpf: '123.456.789-00',
    responsible: 'Subaru',
    dueDate: new Date(),
    status: 'Expirado',
    statusColor: 'warn',
  },
  {
    task: 'Quarta tarefa',
    cpf: '123.456.789-00',
    responsible: 'Subaru',
    dueDate: new Date(),
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
    'task',
    'cpf',
    'responsible',
    'dueDate',
    'status',
  ];
  dataSource = ELEMENT_DATA;
}
