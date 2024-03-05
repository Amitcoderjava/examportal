import { Component,OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories=[{
    cid:23,
    title:"programing",
    discription:"this is testing Category"
 },
 {
  cid:24,
  title:"Aptitude",
  discription:"this is testing Category"
},
{
  cid:23,
  title:"English",
  discription:"this is testing Category"
},

]
  constructor( private category:CategoryService){}
  ngOnInit(): void {
  
    this.category.Categories().subscribe(
      (data:any)=>{
        this.categories=data;
        console.log(data);
      },
      (error: any)=>{
        console.log(error)
        Swal.fire("error !!" , "server error in category" , "error")
      }
    )
  }

}
