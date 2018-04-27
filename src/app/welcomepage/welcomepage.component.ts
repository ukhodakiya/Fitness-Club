import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {SharedService} from '../services/shared.service';
import {Constant} from '../common/constant';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  questions: any = {};
  age: number;
  intensity: number;
  userChoice: any = {};
  fitness = ['Gym Workout', 'Running', 'Diet'];

  constructor(public router: Router,
              public ss: SharedService) {

  }

  ngOnInit() {
  }

  error: boolean = false;

  onClickSubmit() {

    if (!this.intensity || !this.userChoice || !this.age) {
      this.error = true;
      return;
    }

    this.questions['age'] = this.age;
    this.questions['intensity'] = this.intensity;
    this.questions['fitness'] = this.userChoice;

    // this.ss.setQuestion(this.questions);

    Constant.questions = this.questions;

    console.log(this.age, this.userChoice, this.intensity);
    console.log(this.questions);
    this.router.navigate(['/recommendations']);
  }
}
