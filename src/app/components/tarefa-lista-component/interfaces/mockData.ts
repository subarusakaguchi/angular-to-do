import * as dayjs from 'dayjs';
import { TaskRowInfo } from '.';

export const MOCK_DATA: TaskRowInfo[] = [
  {
    taskId: 1,
    task: 'Primeira tarefa',
    cpf: '123.456.789-00',
    responsible: 'Subaru',
    dueDate: dayjs().format('DD/MM/YYYY - HH:mm:ss'),
    status: 'Aberto',
    statusColor: 'info',
    isCompleted: false,
  },
  {
    taskId: 2,
    task: 'Segunda tarefa',
    cpf: '123.456.789-00',
    responsible: 'Subaru',
    dueDate: dayjs().format('DD/MM/YYYY - HH:mm:ss'),
    status: 'Concluído',
    statusColor: 'success',
    isCompleted: true,
  },
  {
    taskId: 3,
    task: 'Terceira tarefa',
    cpf: '123.456.789-00',
    responsible: 'Subaru',
    dueDate: dayjs().format('DD/MM/YYYY - HH:mm:ss'),
    status: 'Expirado',
    statusColor: 'warn',
    isCompleted: false,
  },
  {
    taskId: 4,
    task: 'Quarta tarefa',
    cpf: '123.456.789-00',
    responsible: 'Subaru',
    dueDate: dayjs().format('DD/MM/YYYY - HH:mm:ss'),
    status: 'Aberto',
    statusColor: 'info',
    isCompleted: false,
  },
];
