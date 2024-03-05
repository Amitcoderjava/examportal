import { Component , OnInit } from '@angular/core';
import { ICON_REGISTRY_PROVIDER } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-question',
  templateUrl: './view-quiz-question.component.html',
  styleUrls: ['./view-quiz-question.component.css']
})
export class ViewQuizQuestionComponent implements OnInit {

  qId=0;
  qTitle=null;
  question=[
    {
      "qid":2,
      "content":"fdf",
      "option1":"1",
      "option2":"1",
      "option3":"1",
      "option4":"1",
      "answer":"fsd",
      "quiz":{
        "quizid":1
      }
    }
  ];

  constructor(private _ques:QuestionService,private _rout:ActivatedRoute){}
  ngOnInit(): void {
   this.qId=this._rout.snapshot.params['qid'];
   this.qTitle=this._rout.snapshot.params['title'];
  //  console.log(this.qId)
  //  console.log(this.qTitle)
   this._ques.getQuestionQuiz(this.qId).subscribe(
    (data:any)=>{
      this.question=data;
      console.log(this.question)
    },
    (error)=>{
      Swal.fire('Error','Error generated from the server !!','error');
    }
   )
  }

  deleteQuestion(qId:any){
     Swal.fire(
      {
        icon:'info',
        confirmButtonText:'Delete',
        showCancelButton:true,
        title:'Are you want to delete Question'
      }   
     ).then((q)=>
     {
      if(q.isConfirmed){
        this._ques.deletequestion(qId).subscribe(
          (data)=>{
            Swal.fire('Success','Delete successfully','success')
            this.question=this.question.filter((v)=>v.qid!=qId)
          },
          (error)=>{
            Swal.fire('Error','Error generate by server','error');
          }
        )
      }
     })
  }
}
