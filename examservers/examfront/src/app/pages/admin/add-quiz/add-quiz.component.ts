import { Component , OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit{

  categories=[
    {
      cid:23,
      title:'programing'
    }
  ];

  addQuiz={
    title:'',
    discription:'',
    maxmarks:'',
    noOfQuestion:'',
    isActive:true,
    category:{
      cid: '',
    },
  };

  constructor(private category:CategoryService,private add:QuizService){}
  ngOnInit(): void {
   this.category.Categories().subscribe(
    (data : any)=>{
      this.categories=data
    },
    (error)=>{
      console.log(error);
      Swal.fire('error !!','error occur from derver','error')
    }
   )
  }

  addData(){
    if(this.addQuiz.title.trim()==''|| this.addQuiz.title==null){
      Swal.fire("Required the title !!",'Not Add Empty title','error')
      return;
    }
    this.add.addquiz(this.addQuiz).subscribe(
      (data :any)=>{
        Swal.fire('Add Quiz Successfuly!!','success','success')
        this.addQuiz={
          title:'',
          discription:'',
          maxmarks:'',
          noOfQuestion:'',
          isActive:true,
          category:{
            cid: '',
          },
        };
      },(error:any)=>{
        console.log(error)
        Swal.fire("error occurs from the server",'error','error' )
      }
      );
  }
}
