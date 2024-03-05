import { LocationStrategy } from '@angular/common';
import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  constructor( private locationst:LocationStrategy,
    private _rout:ActivatedRoute,
    private _ques:QuestionService
    ){}

    qid=0
    question=[
       {
        quiz:{
          title:'',
          maxmarks:87,
          noOfQuestion:787,
       },
        givenAnswer:'',
        content:'',
        option1:'',
        option2:'',
        option3:'',
        option4:'',
        answer:'',
       }]
    ;
    gotmarks=0;
    attempted=0;
    correctAnswer=0;
    isSubmit=false;

    timer=0;

  preventbackbutton(){
    history.pushState(null,location.href);
    this.locationst.onPopState(()=>{
      history.pushState(null,location.href)
    })
  }
  ngOnInit(): void {
   this.preventbackbutton();
   this.qid=this._rout.snapshot.params['quizid'];
   this.loadquestion();
  }
  loadquestion(){
    this._ques.getQuestionQuizofTest(this.qid).subscribe(
      (data :any )=>{
         this.question=data
        // console.log(this.question.length)
         this.timer=this.question.length * 2 *60;
         this.question.forEach((r:any)=>{
          r['givenAnswer']=''
         });
         console.log(this.question)
         this.starttimer();
      },
      (error)=>{
        Swal.fire('error','may be this quiz not have any question', 'error');
      }
    )
  }
  // Addanswer(op:any){
  //   this.question[0].givenAnswer=op
  // }
 

  submitquiz(){
    Swal.fire({
      title: 'Do you want to Submit the Quiz?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      icon:'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
        this.evalQuiz();
      // if (result.isConfirmed) {
    
      //   this.isSubmit=true
      //   //  if(this.question.givenAnswer==)
      //   this.question.forEach((q:any)=>{
      //     if(q.givenAnswer==q.answer){
      //       this.correctAnswer++;
      //       let marksSingle= this.question[0].quiz.maxmarks / this.question[0].quiz.noOfQuestion;
      //       this.gotmarks=+marksSingle
      //     }
      //     if(q.givenAnswer.trim()!=''){
      //       this.attempted++;
      //     }
      //   })
      //   Swal.fire('Saved!', '', 'success')
      // } else if (result.isDenied) {
      //   Swal.fire('Changes are not saved', '', 'info')
      // }
    })
  }

   evalQuiz(){
    this._ques.checkans(this.question).subscribe(
      (data :any)=>{
        console.log(data);
        this.attempted=data.attempted
        this.correctAnswer=data.correctAnswer
        this.gotmarks=data.gotmarks
        this.isSubmit=true
      },(error)=>{
        Swal.fire('error','error from the server','error');
      }
    )
   }
   starttimer(){
    let t=window.setInterval(()=>{
      if(this.timer<=0){
        this.submitquiz();
        clearInterval(t)
      }else{
        this.timer--;
      }
    },1000)
   }
   getformatedtime(){
    let mm= Math.floor(this.timer/60)
    let ss=this.timer-mm * 60
    return `${mm} min : ${ss} sec`
   }

}
