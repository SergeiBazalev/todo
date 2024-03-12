import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IData } from '../interfaces/all.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private localStorageKey = 'tasks';

  constructor() {}

  getTasks(): Observable<IData[]> {
    const storedData = localStorage.getItem(this.localStorageKey);
    const tasks: IData[] = storedData ? JSON.parse(storedData) : [];
    return of(tasks);
  }

  addTask(task: IData): Observable<IData[]> {
    const storedData = localStorage.getItem(this.localStorageKey);
    const tasks: IData[] = storedData ? JSON.parse(storedData) : [];
    tasks.push(task);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
    return of(tasks);
  }

  deleteTask(taskId: string): Observable<IData[]> {
    const storedData = localStorage.getItem(this.localStorageKey);
    let tasks: IData[] = storedData ? JSON.parse(storedData) : [];
    const index = tasks.findIndex(task => task.id === taskId);

    if (index !== -1) {
      tasks.splice(index, 1);
      localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
    }

    return of(tasks);
  }
}
