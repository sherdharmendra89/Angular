import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // Rest Endpoint
  endpoint = "http://localhost:8000/ORSAPI/Registration/";

  /** Constructor injects HTTP service
  *
  * @param http  
  */
  constructor(private http: HttpClient) { }
  /** Add/Update records
  * @param form
  * @param response
  */
 save(form:any,compCB:any){

  let url = this.endpoint + "save";
  this.http.post(url,form).subscribe(
    (data) => {
      compCB(data);
    },
    (data) => { 
      compCB(data,true);
    });
 }
}
