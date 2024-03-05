import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginstatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient ) { }

  public getCurrentUser(){

    return this.http.get(`${baseurl}/current-user`)
  }

  // create a method for generate token

  public generatetoken(logindata : any){

    return this.http.post(`${baseurl}/generate-Token`,logindata);
  }

  public loginUser(token : any){
    console.log("set data in localstorage")
     localStorage.setItem('token',token);
     return true;
  }

  public isloggedIn(){
    let tokenstr=localStorage.getItem('token');
    if(tokenstr==undefined || tokenstr==''||tokenstr==null){
      console.log("undefine token shows")
      return false;
    }else{
      return true;
    }
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public gettoken(){
    return localStorage.getItem('token');
  }

  public setuser(user :any){

    localStorage.setItem('user',JSON.stringify(user));
  }
   
  public getuser(){
    let userstr=localStorage.getItem('user');
    if(userstr !=null){
    return JSON.parse(userstr);
    }else{
      this.logout();
      return null;
    }
  }

  public getuserrole(){
   console.log("authority return or not")
let user=this.getuser();
console.log(user)
return user.authorities[0].authority;
  }

}