import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import {
  IData,
  ISelect,
  TaskPriority,
  TaskStatus,
} from '../interfaces/all.interface';
import { MatOptionModule } from '@angular/material/core';

const ELEMENT_DATA: IData[] = [
  {
    id: '1',
    title: 'title',
    name: 'Hydrogen',
    deadline: new Date(),
    priority: TaskPriority.High,
    status: TaskStatus.AccordingToPlan,
    performer: 'sd',
  },
  {
    id: '2',
    title: 'title',
    name: 'Hydrogen',
    deadline: new Date(),
    priority: TaskPriority.Medium,
    status: TaskStatus.AccordingToPlan,
    performer: 'sd',
  },
  {
    id: '3',
    title: 'title',
    name: 'Hydrogen',
    deadline: new Date(),
    priority: TaskPriority.Low,
    status: TaskStatus.AccordingToPlan,
    performer: 'sd',
  },
  {
    id: '4',
    title: 'title',
    name: 'Hydrogen',
    deadline: new Date(),
    priority: TaskPriority.None,
    status: TaskStatus.AccordingToPlan,
    performer: 'sd',
  },
];
@Component({
  selector: 'app-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatSelectModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  displayedColumns: string[] = [
    'name',
    'title',
    'deadline',
    'priority',
    'status',
    'performers',
  ];
  dataSource = ELEMENT_DATA;
  formData: any = {};

  priorities: ISelect[] = [
    { value: 0, viewValue: '—' },
    { value: 1, viewValue: 'Low' },
    { value: 2, viewValue: 'Medium' },
    { value: 3, viewValue: 'High' },
  ];

  statuses: ISelect[] = [
    { value: 0, viewValue: '—' },
    { value: 1, viewValue: 'According to plan' },
    { value: 2, viewValue: 'Threatened' },
    { value: 3, viewValue: 'Lagging' },
  ];

  performers: ISelect[] = [
    { value: 0, viewValue: 'Me' },
    { value: 1, viewValue: 'Another person' },
  ];
}
