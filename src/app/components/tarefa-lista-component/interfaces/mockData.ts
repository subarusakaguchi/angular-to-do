import * as dayjs from 'dayjs';
import { TaskRowInfo } from '.';

export const MOCK_DATA: TaskRowInfo[] = [
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
