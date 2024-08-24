// src/app/service/todo.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

export interface Todo {
  id?: number;
  title: string;
  body: string;
  userId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
  todos: Todo[] = [];
  private limit = 10;  // Dynamic limit
  private nextId = this.limit + 1;  // Start new IDs from limit + 1

  async getTodos(): Promise<Todo[]> {
    const url = `${this.apiUrl}?_limit=${this.limit}`;
    this.todos = await lastValueFrom(this.http.get<Todo[]>(url));
    
    // Update nextId based on the fetched todos
    if (this.todos.length > 0) {
      this.nextId = Math.max(...this.todos.map(todo => todo.id ?? 0)) + 1;
    } else {
      this.nextId = this.limit + 1;
    }
    
    console.log('Fetched todos:', this.todos.length);
    console.log('Next ID will be:', this.nextId);
    return this.todos;
  }

  async createTodo(todo: Omit<Todo, 'id'>): Promise<Todo> {
    // Simulate server response, but use our own ID
    const newTodo: Todo = { ...todo, id: this.nextId++ };
    
    // Simulate API call (JSONPlaceholder doesn't actually create new posts)
    await lastValueFrom(this.http.post<Todo>(this.apiUrl, newTodo));
    
    this.todos.push(newTodo);
    return newTodo;
  }

  // Method to change the limit dynamically
  setLimit(newLimit: number): void {
    this.limit = newLimit;
    this.nextId = this.limit + 1;
    // Note: You may want to call getTodos() here to refresh the list with the new limit
  }
}