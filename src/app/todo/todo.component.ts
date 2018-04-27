import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {TodoDataService} from '../todo-data.service';
import {SharedService} from '../services/shared.service';
import {Constant} from '../common/constant';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoDataService, SharedService]
})
export class TodoComponent implements OnInit {

  questions: any = {};
  newTodo: Todo = new Todo();
  gym: string[] = ['Stability ball back extension',
                              'Seated resistance band row',
                              'Stability ball-rollout',
                              'Stability ball knee tucks',
                              'Spiderman',
                              'Stability ball side lift',
                              'Stability ball Oblique crunch',
                              'Stability ball straight leg crunches'];

  running: string[] = ['Kick It Off',
    'Benchmark',
    'Recovery Run',
    'Long Run',
    'Tempo',
    'Medium speed run',
    'Fast speed run'];

  diet: string[] = ['Sprouts',
    'Greens',
    'Herbs',
    'Bok Choy',
    'Radishes',
    'Sea Vegetables',
    'Cabbage',
    'Mushrooms',
    'Avocado'];

  fitness = ['Gym Workout', 'Running', 'Diet'];

  constructor(private todoDataService: TodoDataService,
              public ss: SharedService) {

    // console.log(Constant.questions, Constant.questions['fitness']['Gym Workout'], Constant.questions['fitness']['Running']);

    let recommender = [];
    if (Constant.questions['fitness']) {
      if (Constant.questions['fitness']['Gym Workout']) {
        recommender = this.gym.slice();
      }
      else if (Constant.questions['fitness']['Running']) {
        recommender = this.running.slice();
      }
      else if (Constant.questions['fitness']['Diet']) {
        recommender = this.diet.slice();
      }
    }

    for (let i = 0; i < recommender.length; i++) {
      this.newTodo.title = recommender[i];
      this.addTodo();
    }
  }

  ngOnInit() {

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

}
