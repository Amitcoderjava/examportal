import { Component,OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit{

  quizzes=[{
    quizid:21,
    title : 'Basic of Java',
    discription:'It is a part of the Java programming language that one can use for developing or creating a general-purpose app. Its main focus is to build such general applications.',
    maxmarks:'50',
    noOfQuestion:'20',
    active:'',
    category:{
      title:'Programing',
      discription:'programing test'
    }

  }]

  constructor(private quiz:QuizService){}

  ngOnInit(): void {

    this.quiz.quizzes().subscribe(
      (data: any)=>{
        this.quizzes=data
        console.log(data)
        // Swal.fire('success !! ','get all Quizzes from server','success')
      },
      (error)=>{

        console.log(error)
        Swal.fire('error !!','Server Error !!','error')
      }
      )   
  }

  deletequiz(qid :any){

  Swal.fire(
    {
      icon:'info',
      title:'You want to Delete',
      confirmButtonText:'Delete',
      showCancelButton:true
    }
  ).then((result)=>{
    if(result.isConfirmed){
      // then delete conform
      this.quiz.deletequiz(qid).subscribe(
        (data : any)=>{
          this.quizzes=this.quizzes.filter((quiz)=>quiz.quizid!=qid);
  
          Swal.fire('success !!','delete successfuly','success');
  
        },
        (error:any)=>{
  
          Swal.fire('error !!','error generated from the server','error');
  
        }
      );
    }
  })

  }

}
