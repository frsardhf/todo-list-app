# TodoListApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.1. It demonstrates basic CRUD operations, form handling, and integration with a mock API.

## Features

- Fetch and display a list of todos
- Add new todos
- Responsive design
- Integration with JSONPlaceholder API

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.x or later)
- npm (v6.x or later)
- Angular CLI (v18.x)

## Installation

1. Clone the repository: https://github.com/frsardhf/todo-list-app.git
2. Navigate to the project directory: cd todo app
3. Install the dependencies: npm install

## Usage

To run the application locally:

1. Start the development server: ng serve or npm start
2. Open your browser and navigate to `http://localhost:4200/`

## Project Structure

- `src/app/core/todo-list-item`: Component for displaying the list of todos
- `src/app/core/todo-list-editor`: Component for adding new todos
- `src/app/service/todo.service.ts`: Service for handling API requests and data management

## API Integration

This project uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) as a mock API for todos. The `TodoService` handles the integration, including:

- Fetching a limited number of todos
- Creating new todos (simulated)
