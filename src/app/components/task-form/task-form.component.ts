import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
