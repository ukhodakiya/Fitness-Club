import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = '';

  constructor() { }

  ngOnInit() {
  }
OnButtonClick() {
    this.name = 'Hello USer';
}
}
