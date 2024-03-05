import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit{

  constructor(private rout:ActivatedRoute,private _quiz:QuizService,private _cat:CategoryService){}
  qId=0;
  quiz=
    {
      title:'',
      discription:'',
      maxmarks:'',
      noOfQuestion:'',
      active:true,
      category:{
        cid: '',
      },
    }
  ;
  categories=[
    {
      cid:23,
      title:'programing'
    }
  ];
  ngOnInit(): void {
    this.qId=this.rout.snapshot.params['qid'];
  //  alert(this.qId);
      this._quiz.getQuiz(this.qId).subscribe(
        (data:any)=>{
          this.quiz=data
         // Swal.fire('success','update to new quiz','success');
        },
        (error)=>{

          Swal.fire('error' , 'error from server','error');

        }
        )
      this._cat.Categories().subscribe(
        (data:any)=>{
          this.categories=data;
        },
        (error)=>{
          alert('not load from the server')
        }
      )

  }
  public Updatedata(){
    this._quiz.updatequiz(this.quiz).subscribe(
      (data)=>{
        Swal.fire('Success','Quiz Udated Successfully !!','success')
      },
      (error)=>{
        Swal.fire('error' ,'Error generate in Quiz Updating','error');
      }
      
    )
  }
}
