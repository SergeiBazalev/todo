import { Component, OnInit, importProvidersFrom, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IData,
  ISelect,
  TaskPriority,
  TaskStatus,
} from '../interfaces/all.interface';
import { MatButtonModule } from '@angular/material/button';

import { Store, StoreModule } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { addTask, deleteTask, loadTasks } from '../task-store/task.actions';
import { v4 as uuidv4 } from 'uuid';
import { CommonModule } from '@angular/common';
import { taskReducer } from '../task-store/task.reducer';

@Component({
  selector: 'app-table',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'title',
    'deadline',
    'priority',
    'status',
    'performers',
  ];
  dataSource$: Observable<IData[]> = EMPTY;

  name = new FormControl('', [Validators.required]);
  title = new FormControl('');
  deadline = new FormControl('');
  priority = new FormControl('None');
  status = new FormControl('None');
  performer = new FormControl('');

  private readonly store: Store<{ tasks: IData[] }> = inject(
    Store<{ tasks: IData[] }>
  );

  priorities: ISelect[] = [
    { value: 0, viewValue: TaskPriority.None },
    { value: 1, viewValue: TaskPriority.Low },
    { value: 2, viewValue: TaskPriority.Medium },
    { value: 3, viewValue: TaskPriority.High },
  ];

  statuses: ISelect[] = [
    { value: 0, viewValue: TaskStatus.None },
    { value: 1, viewValue: TaskStatus.AccordingToPlan },
    { value: 2, viewValue: TaskStatus.Threatened },
    { value: 3, viewValue: TaskStatus.Lagging },
  ];

  performers: ISelect[] = [
    { value: 0, viewValue: 'Me' },
    { value: 1, viewValue: 'Enother person' },
  ];

  ngOnInit(): void {
    this.dataSource$ = this.store.select('tasks');
    this.store.dispatch(loadTasks());
  }

  addTask() {
    if (!this.name.value) {
      return;
    }
    const task: IData = {
      id: uuidv4(),
      name: this.name.value,
      title: this.title.value ?? '',
      deadline: this.deadline.value ?? new Date(),
      priority: this.priority.value as TaskPriority,
      status: this.status.value as TaskStatus,
      performer: this.performer.value ?? '',
    };

    this.store.dispatch(addTask(task));
    this.resetForm();
  }

  deleteTask(id: string) {
    this.store.dispatch(deleteTask({ id }));
  }

  private resetForm() {
    this.name.reset('');
    this.title.reset('');
    this.deadline.reset('');
    this.priority.reset('');
    this.status.reset('');
    this.performer.reset('');
  }
}
