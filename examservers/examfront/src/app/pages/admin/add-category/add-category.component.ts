import { Component,OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category=
    {
      title :'',
      discription :'',
    }
  
  constructor(private _category:CategoryService){
  }
  ngOnInit(): void {}
  formsubmit(){
  
    if(this.category.title.trim()=='' || this.category.title==null){
      Swal.fire("error","title is required","error")
      return;
    }
    this._category.addcategories(this.category).subscribe(
      (data: any)=>{
        this.category.title=''
        this.category.discription=''
        Swal.fire('success !!','category is add successfuly','success')
      },(error)=>{
        console.log(error)
        Swal.fire('error !!','server error','error')
      }
    )
  }
}
