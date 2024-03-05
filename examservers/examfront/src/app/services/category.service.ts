import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  // get categories
  public Categories(){
    return this.http.get(`${baseurl}/category/`)
  }

  // add categaries
  public addcategories(category  : any){
    return this.http.post(`${baseurl}/category/`,category)
  }
}
