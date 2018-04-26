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
  weightLossTasks: string[] = ['Stability ball back extension', 
                              'Seated resistance band row',
                              'Stability ball-rollout',
                              'Stability ball knee tucks',
                              'Spiderman',
                              'Stability ball side lift',
                              'Stability ball Oblique crunch',
                              'Stability ball straight leg crunches']

  constructor(private todoDataService: TodoDataService) { 

    
    for (let i = 0; i < this.weightLossTasks.length; i++) {
      this.newTodo.title = this.weightLossTasks[i];
      this.addTodo();
    }

  }
  
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
