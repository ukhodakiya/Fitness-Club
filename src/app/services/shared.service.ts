import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class SharedService {

  @Output() questions: EventEmitter<any> = new EventEmitter();

  setQuestion(obj: any) {
    this.questions.emit(obj);
  }

  getQuestion() {
    return this.questions;
  }

}
