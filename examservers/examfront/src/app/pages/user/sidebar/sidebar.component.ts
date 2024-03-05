import { Component , OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent  implements OnInit{

  categories=[
    {
      cid:32,
      title: 'dsd',
    }
  ];

  constructor(private category:CategoryService , private _mat:MatSnackBar){}
  ngOnInit(): void {
    this.category.Categories().subscribe(
      (data:any)=>{
        this.categories=data;
      },
      (error)=>{
          this._mat.open('Error generated from the server ','',
            { duration:3000}
          )
      }
    )
  }

}
