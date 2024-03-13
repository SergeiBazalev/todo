import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { TasksService } from '../services/tasks.service';
import {
  addTask,
  addTaskError,
  addTaskSuccess,
  deleteTask,
  deleteTaskError,
  deleteTaskSuccess,
  loadTasks,
  loadTasksError,
  loadTasksSuccess,
} from './task.actions';
import { of } from 'rxjs';

@Injectable()
export class TasksEffects {
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),
      exhaustMap(() =>
        this.tasksService.getTasks().pipe(
          map((tasks) => loadTasksSuccess({ tasks })),
          catchError((error) =>
            of(loadTasksError({ errorMessage: error.message }))
          )
        )
      )
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTask),
      exhaustMap((task) =>
        this.tasksService.addTask(task).pipe(
          map((task) => addTaskSuccess({ task })),
          catchError((error) =>
            of(addTaskError({ errorMessage: error.message }))
          )
        )
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTask),
      exhaustMap((task) =>
        this.tasksService.deleteTask(task.id).pipe(
          map(() => deleteTaskSuccess({ id: task.id })),
          catchError((error) =>
            of(deleteTaskError({ errorMessage: error.message }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private tasksService: TasksService) {}
}
