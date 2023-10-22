import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TarefaService } from './services/tarefa/tarefa.service';
import {
  POSSIBLE_STATUS_COLOR,
  POSSIBLE_TASK_STATUS,
  TaskRowInfo,
} from './components/tarefa-lista-component/interfaces';
import * as dayjs from 'dayjs';
import { cpfValidator } from 'src/utils/validateCpf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dataSource: TaskRowInfo[];
  title = 'to-do-list';

  constructor(private todoListService: TarefaService) {
    this.dataSource = this.todoListService.listToDos();
  }

  ngOnInit(): void {}

  applyForm = new FormGroup(
    {
      task: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.pattern(/(\d{3})(\d{3})(\d{3})(\d{2})/),
      ]),
      responsible: new FormControl('', [Validators.required]),
      dueDate: new FormControl(''),
      status: new FormControl(POSSIBLE_TASK_STATUS.OPEN),
      statusColor: new FormControl(POSSIBLE_STATUS_COLOR.SECONDARY),
    },
    { validators: cpfValidator }
  );

  options: string[] = [];

  onSubmit() {
    console.log(this.applyForm.errors);
    if (this.applyForm.invalid) {
      return;
    }

    const { task, cpf, responsible, dueDate, status, statusColor } =
      this.applyForm.value;

    this.todoListService.addNewTodo({
      taskId:
        this.dataSource && this.dataSource.length > 0
          ? this.dataSource[0].taskId + 1
          : 1,
      task: task ?? '',
      cpf: cpf ?? '',
      responsible: responsible ?? '',
      dueDate: dueDate ? dayjs(dueDate as Date).format('DD/MM/YY') : '',
      status: status ?? POSSIBLE_TASK_STATUS.OPEN,
      statusColor: statusColor ?? POSSIBLE_STATUS_COLOR.SECONDARY,
      isCompleted: false,
    });

    this.applyForm = new FormGroup({
      task: new FormControl(''),
      cpf: new FormControl(''),
      responsible: new FormControl(''),
      dueDate: new FormControl(''),
      status: new FormControl(POSSIBLE_TASK_STATUS.OPEN),
      statusColor: new FormControl(POSSIBLE_STATUS_COLOR.SECONDARY),
    });

    this.dataSource = this.todoListService.listToDos();
  }

  // Form getters
  get taskName() {
    return this.applyForm.get('task');
  }
}
