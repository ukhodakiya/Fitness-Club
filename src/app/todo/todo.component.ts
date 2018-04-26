import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {TodoDataService} from '../todo-data.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoDataService]
})
export class TodoComponent implements OnInit {
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) { }
  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }
  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }
  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
  ngOnInit() {
  }

}
