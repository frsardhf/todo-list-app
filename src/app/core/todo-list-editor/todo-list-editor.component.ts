// src/app/todo-list-editor/todo-list-editor.component.ts
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '@app/service/todo.service';

@Component({
  selector: 'todo-list-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-list-editor.component.html',
  styleUrls: ['./todo-list-editor.component.css']
})
export class TodoListEditorComponent {
  todoService = inject(TodoService);

  todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  async onSubmit() {
    if (this.todoForm.valid) {
      try {
        const newTodo = await this.todoService.createTodo(this.todoForm.value as {title: string, body: string});
        console.log('New todo created:', newTodo);
        this.todoForm.reset();
      } catch (error) {
        console.error('Error creating todo:', error);
      }
    }
  }
}