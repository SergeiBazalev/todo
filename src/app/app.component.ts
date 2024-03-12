import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './task-store/task.reducer';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, TableComponent, FormComponent]
})
export class AppComponent {
  title = 'todo';
}
