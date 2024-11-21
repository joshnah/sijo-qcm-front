import { Injectable } from '@angular/core';
import { SelectedResponses } from '../../../shared/models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }
  sendResponses(selectedResponses: SelectedResponses){
    alert("Sending response")
  }

}
