import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }
// for get question for one quiz
  public getQuestionQuiz(qid:any){
    return this.http.get(`${baseurl}/question/quiz/all/${qid}`);
  }
  // get all Question for single Quiz
  public getQuestionQuizofTest(qid:any){
    return this.http.get(`${baseurl}/question/quiz/${qid}`);
  }

  // check quiz solutation form backend
  public checkans(question:any){
    return this.http.post(`${baseurl}/question/eval-quiz`,question)
  }
  // for add question
  public addquestion(question:any){
    return this.http.post(`${baseurl}/question/`,question);
  }

  // delete Question
  public deletequestion(qid:any){
    return this.http.delete(`${baseurl}/question/${qid}`);
  }
}
