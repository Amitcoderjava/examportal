import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit{

  public Editor = ClassicEditor;


  qId=0;
  Title=null;
  question={
    quiz:{
      quizid:2
    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    Image:'',
  }

  constructor(private _route:ActivatedRoute,private _ques:QuestionService){}
  ngOnInit(): void {

    this.qId=this._route.snapshot.params['qid']
    this.Title=this._route.snapshot.params['title']
    this.question.quiz.quizid=this.qId
  }

  formsubmit(){
    if(this.question.content.trim()=='' || this.question.content==null){
      return;
    }
    if(this.question.option1.trim()=='' || this.question.option1==null){
      return;
    }
    if(this.question.option2.trim()=='' || this.question.option2==null){
      return;
    }
    if(this.question.answer.trim()=='' || this.question.answer==null){
      return;
    }

    // add question object into our database
    this._ques.addquestion(this.question).subscribe(
      (data)=>{
        Swal.fire('success','Add Question successfully','success')
        this.question.content=''
        this.question.option1=''
        this.question.option2=''
        this.question.option3=''
        this.question.option4=''
        this.question.answer=''
      },(error)=>{
        Swal.fire('Error','Error generated form the server or object not match','error')
      }
    )
  }

}
