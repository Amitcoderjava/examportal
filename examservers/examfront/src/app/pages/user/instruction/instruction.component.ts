import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  qid=0;
  quiz={
    quizid:2,
    title:'',
    discription:'',
    noOfQuestion:'',
    maxmarks:'',
    
    
  }
  constructor(private _rout:ActivatedRoute , private _quiz:QuizService , private _route:Router){}
  ngOnInit(): void {

    this.qid=this._rout.snapshot.params['quizid'];
    this._quiz.getQuiz(this.qid).subscribe(
      (data:any)=>{
        // console.log(data)
        this.quiz=data;
      },
      (error)=>{
        alert('error from server')
      }
    )
  }
  startquiz(){

    Swal.fire({
      icon:'info',
      title: 'Do you want to Start the quiz?',
      showCancelButton: true,
      confirmButtonText: 'Start',     
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._route.navigate(['/start/'+this.quiz.quizid])
        // Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }

}
