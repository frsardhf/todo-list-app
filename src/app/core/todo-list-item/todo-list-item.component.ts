// src/app/todo-list-item/todo-list-item.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '@app/service/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItem implements OnInit {
  todoService = inject(TodoService);

  async ngOnInit() {
    // Optionally set a different limit
    // this.todoService.setLimit(20);
    
    await this.todoService.getTodos();
  }
}