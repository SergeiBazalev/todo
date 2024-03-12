import { createAction, props } from '@ngrx/store';
import { IData } from '../interfaces/all.interface';

export const addTask = createAction('[Task] Add Task', props< IData >());

export const loadTasks = createAction('[Task] Load Tasks');

export const loadTasksError = createAction('[Task] Load Tasks Error', props<{ errorMessage: string } >());

export const loadTasksSuccess = createAction('[Task] Load Tasks Success', props<{ tasks:IData[] } >());

export const addTasksError = createAction('[Task] Add Task Error', props<{ errorMessage: string } >());

export const addTasksSuccess = createAction('[Task] Add Task Success', props<{ tasks:IData } >());
