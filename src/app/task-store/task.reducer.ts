import { createReducer, on } from '@ngrx/store';
import {  addTasksSuccess } from './task.actions';
import { IData } from '../interfaces/all.interface';


export const initialState: IData[] = [];

export const taskReducer = createReducer(
  initialState,
  on(addTasksSuccess, (state, task ) => [...state, task])
);
