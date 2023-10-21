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
  dueDate: string;
  status: TaskStatus;
  statusColor: TaskStatusColor;
}
