import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

constructor(private login:LoginService, private router:Router){}

ngOnInit(): void {
  
}

logindata={
  username :'',
  password: '',
};

formsubmit(){
   console.log("form submitted")
   if(this.logindata.username.trim()=="" || this.logindata.username==null || this.logindata.password.trim()=="" || this.logindata.password==null ){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Enter Valid username or Password',
      footer: '<a href="">Why do I have this issue?</a>'
    });
    return;
   }

// request to server to generate-token
this.login.generatetoken(this.logindata).subscribe(
  (data : any)=>{
    console.log('success');
    console.log(data);
    //user is found     
    
    this.login.loginUser(data.token)
    this.login.getCurrentUser().subscribe(
      (user :any)=>{
        this.login.setuser(user)

        console.log("rediret start")
        //rediret ... ADMIN :admin-dasboard
        //rediret ... NORMAL :nornmal-dasboaard

        if(this.login.getuserrole()== "ADMIN"){

          //admin dashboard

          // window.location.href='/admin';
          this.router.navigate(['admin']);
          this.login.loginstatusSubject.next(true)

        }else if(this.login.getuserrole()=="Normal"){

          console.log("enter normal-dash")
          // Normal dashboard
        //  / window.location.href='/userdashboard'
          this.router.navigate(['userdashboard/0']);
          this.login.loginstatusSubject.next(true)

        }else{

          //neither admin or normal dashboard
          this.login.logout();
        }
      }
    )

  },
 (error : any)=>{
  console.log('error');
  console.log(error);
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Enter Valid username or Password',
    footer: '<a href="">Why do I have this issue?</a>'
  })
 }
);
}
}

