import { Component , OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{


  constructor(private login:LoginService){}
  ngOnInit(): void {

    // this.user=this.login.getuser();
    // console.log("enter in profile ts file");
  }
  user=this.login.getuser();

}
