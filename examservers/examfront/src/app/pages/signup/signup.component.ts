import { getLocaleCurrencySymbol } from '@angular/common';
import { Component , OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  constructor( private userservice : UserService ,  private snack:MatSnackBar){}

  ngOnInit(): void {
    
  }

  public user = {

    username : '',
    password : '',
    first_Name :'',
    last_Name :'',
    email :'',
    phone : '',

  };

  formsubmit(){
    //alert('form submited');

    console.log(this.user);
    if(this.user.username=='' || this.user.username==null){
     //  alert("it is required");
     this.snack.open("username is required" , "close",{
      duration:3000
     });
      return;
    }
   // adduser in userservice
    this.userservice.adduser(this.user).subscribe(
      (data)=>{
        // for success
        console.log(data);
        alert('success');
      },
      (error)=>{
        console.log(error);
        //alert('somthing wents worng...!!');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    );
      } 
      }

