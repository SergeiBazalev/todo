export interface ISelect {
  value: number;
  viewValue: string;
}

export enum TaskPriority {
  None = 'None',
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}

export enum TaskStatus{
  None = 'None',
  AccordingToPlan = 'According to plan',
  Threatened = 'Threatened',
  Lagging = 'Lagging',
}

export interface IData {
  id: string,
  name: string,
  title: string,
  deadline: string | Date,
  priority: TaskPriority,
  status: TaskStatus,
  performer: string,
}
