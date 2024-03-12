import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { TasksService } from '../services/tasks.service';
import { addTask, loadTasks, loadTasksError, loadTasksSuccess } from './task.actions';
import { of } from 'rxjs';

@Injectable()
export class TasksEffects {

  loadTasks$ = createEffect(() => this.actions$.pipe(
    ofType(loadTasks),
    exhaustMap(() => this.tasksService.getTasks()
      .pipe(
        map(tasks => loadTasksSuccess({tasks})),
        catchError((error) => of(loadTasksError({ errorMessage: error.message})))
      ))
    )
  );

  addTasks$ = createEffect(() => this.actions$.pipe(
    ofType(addTask),
    exhaustMap((task) => this.tasksService.addTask(task)
      .pipe(
        map(tasks => loadTasksSuccess({tasks})),
        catchError((error) => of(loadTasksError({ errorMessage: error.message})))
      ))
    )
  );

  deleteTasks$ = createEffect(() => this.actions$.pipe(
    ofType(addTask),
    exhaustMap((task) => this.tasksService.deleteTask(task.id)
      .pipe(
        map(tasks => loadTasksSuccess({tasks})),
        catchError((error) => of(loadTasksError({ errorMessage: error.message})))
      ))
    )
  );


  constructor(
    private actions$: Actions,
    private tasksService: TasksService
  ) {}
}
