import { createAction, props } from '@ngrx/store';
import { IData } from '../interfaces/all.interface';

export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksError = createAction(
  '[Task] Load Tasks Error',
  props<{ errorMessage: string }>()
);
export const loadTasksSuccess = createAction(
  '[Task] Load Tasks Success',
  props<{ tasks: IData[] }>()
);

export const addTask = createAction('[Task] Add Task', props<IData>());
export const addTaskError = createAction(
  '[Task] Add Task Error',
  props<{ errorMessage: string }>()
);
export const addTaskSuccess = createAction(
  '[Task] Add Task Success',
  props<{ task: IData }>()
);

export const deleteTask = createAction(
  '[Task] Delete Task',
  props<{ id: string }>()
);
export const deleteTaskError = createAction(
  '[Task] Delete Task Error',
  props<{ errorMessage: string }>()
);
export const deleteTaskSuccess = createAction(
  '[Task] Delete Task Success',
  props<{ id: string }>()
);
