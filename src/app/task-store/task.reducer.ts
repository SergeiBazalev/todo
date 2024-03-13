import { createReducer, on } from '@ngrx/store';
import {
  addTaskError,
  addTaskSuccess,
  deleteTaskError,
  deleteTaskSuccess,
  loadTasksError,
  loadTasksSuccess,
} from './task.actions';
import { IData } from '../interfaces/all.interface';

export const initialState: IData[] = [];

export const taskReducer = createReducer(
  initialState,
  on(addTaskSuccess, (state, { task }) => [...state, task]),
  on(addTaskError, (state, { errorMessage }) => {
    console.error(errorMessage);
    return state;
  }),
  on(deleteTaskSuccess, (state, { id }) =>
    state.filter((task) => task.id !== id)
  ),
  on(deleteTaskError, (state, { errorMessage }) => {
    console.error(errorMessage);
    return state;
  }),

  // pagination?
  on(loadTasksSuccess, (state, { tasks }) => [...state, ...tasks]),
  on(loadTasksError, (state, { errorMessage }) => {
    console.error(errorMessage);
    return state;
  })
);
