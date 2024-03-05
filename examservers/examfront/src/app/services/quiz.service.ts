import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public quizzes(){
    return this.http.get(`${baseurl}/quiz/`);
  }

  public addquiz(quiz: any){
    return this.http.post(`${baseurl}/quiz/`,quiz);
  }
  public deletequiz(quizid: any){
    return this.http.delete(`${baseurl}/quiz/${quizid}`);
  }

  // get single quiz
  public  getQuiz(qid : any){
    return this.http.get(`${baseurl}/quiz/${qid}`)
  }
  // Update quiz
  public updatequiz(quiz:any){
    return this.http.put(`${baseurl}/quiz/`,quiz);
  }
  // get quizzes of single category
  public getquizzesofCategory(cid:any){
    return this.http.get(`${baseurl}/quiz/category/${cid}`);
  }
  // get All Active quizzes
  public getActiveQuizzes(){
    return this.http.get(`${baseurl}/quiz/active`)
  }
  // get Category by active quizzes
  public getCategorybyActive(cid :any){
    return this.http.get(`${baseurl}/quiz/category/active/${cid}`)
  }
}
