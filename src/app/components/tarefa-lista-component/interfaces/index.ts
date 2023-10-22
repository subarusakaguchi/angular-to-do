import { ObjectValues } from 'src/utils/objectValue';

export const POSSIBLE_TASK_STATUS = {
  OPEN: 'Aberto',
  CLOSED: 'Concluído',
  EXPIRED: 'Expirado',
} as const;

export const POSSIBLE_STATUS_COLOR = {
  SECONDARY: 'secondary',
  PRIMARY: 'primary',
  WARN: 'warn',
} as const;

const POSSIBLE_FILTERS = {
  ALL: 'all',
  CLOSED: 'closed',
  NOT_CLOSED: 'not_closed',
} as const;

type TaskStatus = ObjectValues<typeof POSSIBLE_TASK_STATUS>;

type TaskStatusColor = ObjectValues<typeof POSSIBLE_STATUS_COLOR>;

export type FilterValues = ObjectValues<typeof POSSIBLE_FILTERS>;

export interface TaskRowInfo {
  taskId: number;
  task: string;
  cpf: string;
  responsible: string;
  dueDate: string;
  status: TaskStatus;
  statusColor: TaskStatusColor;
  isCompleted: boolean;
}

export interface ISelectOption {
  value: FilterValues;
  viewValue: string;
}
