import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  endpoint = "http://localhost:8000/ORSAPI/Course/"

  constructor(private http:HttpClient) { }

  get(id:number,compCB:any){
    let url = this.endpoint +"get/" + id;
    var observable =this.http.get(url);
    observable.subscribe(
      function success(data){
        compCB(data);
      },function fail(data){
        console.log("HELLO PEOPPE",data)
        compCB(data,true);
      }
    );

  }

  delete(id:number,compCB:any){
    let url = this.endpoint + "delete/" + id;
    var observable = this.http.get(url);
    observable.subscribe(
      (data) => {
        compCB(data);
      },(data) => {
        compCB(data,true);
      }

    );
  }

  search(form:any,compCB:any){
    let url = this.endpoint + "search/";
    this.http.post(url,form).subscribe(
      (data) => {
        compCB(data);
      },(data) => {
        compCB(data,true);
      }
    );
  }

  save(form:any,compCB:any){
    let url = this.endpoint + "save/";
    this.http.post(url,form).subscribe(
      (data) => {
        compCB(data);
      },(data) => {
        compCB(data,true);
      }
    );
}
}
