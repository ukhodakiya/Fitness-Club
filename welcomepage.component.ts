import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {Form} from '@angular/Forms'
@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {
  ages = ['<25', '<45', '<65', '<85'];
  fitness = ['Gym Workout', 'Running', 'Diet'];
  intenses = ['light ', 'medium', 'hard'];




  constructor(public router: Router) {

  }

  ngOnInit() {

  }

  onClickSubmit() {
    this.router.navigate(['/recommendations']);
  }


}
