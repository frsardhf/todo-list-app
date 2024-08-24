import { Component } from '@angular/core';
// import { TodoListComponent } from './core/todo-list/todo-list.component';
import { TodoListItem } from './core/todo-list-item/todo-list-item.component';
import { TodoListEditorComponent } from './core/todo-list-editor/todo-list-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListItem, TodoListEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list-app';
}
