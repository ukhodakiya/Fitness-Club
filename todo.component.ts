import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {TodoDataService} from '../todo-data.service';

import {WelcomepageComponent} from '../welcomepage/welcomepage.component';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoDataService]
})
export class TodoComponent implements OnInit {

  newTodo: Todo = new Todo();
  counter = 0;
  rb1 = 0;
  weightLossTasks: string[] = ['Stability ball back extension',
                              'Seated resistance band row',
                              'Stability ball-rollout',
                              'Stability ball knee tucks',
                              'Spiderman',
                              'Stability ball side lift',
                              'Stability ball Oblique crunch',
                              'Stability ball straight leg crunches']

  fitnessTask: string[] = ['Kick It Off',
                                'Benchmark',
                                'Recovery Run',
                                'Long Run',
                                'Tempo',
                                'medium speed run',
                                 'fast speed run']

  dietTask: string[] = ['Sprouts',
                              'Greens',
                              'Herbs',
                              'Bok Choy',
                              'Radishes',
                              'Sea Vegetables',
                              'Cabbage',
                              'Mushrooms',
                              'Avocado']


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
    this.counter++;
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
