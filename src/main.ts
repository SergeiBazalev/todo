import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { StoreModule, provideStore } from '@ngrx/store';
import { importProvidersFrom } from '@angular/core';
import { taskReducer } from './app/task-store/task.reducer';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { TasksEffects } from './app/task-store/task.effects';

bootstrapApplication(AppComponent, {
  providers: [
    // importProvidersFrom(
    //   // configure NgRx modules
    //   StoreModule.forRoot({ tasks: taskReducer }),
    //   EffectsModule.forRoot([TasksEffects])
    // ),
    provideStore({ tasks: taskReducer }),
    provideEffects([TasksEffects]),
  ],
}).catch((err) => console.error(err));
