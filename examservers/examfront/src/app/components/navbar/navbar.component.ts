import { Component , OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedin=false;
  user = null;
  constructor(public login:LoginService){}
  ngOnInit(): void {
    this.isLoggedin=this.login.isloggedIn()
    this.user= this.login.getuser();
    this.login.loginstatusSubject.asObservable().subscribe((data) => {

      this.isLoggedin=this.login.isloggedIn();
      this.user=this.login.getuser();
    })
    
  }
  public logout(){
    this.login.logout();
    window.location.reload();
  }
}
