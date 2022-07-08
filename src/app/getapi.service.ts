import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  constructor(private http: HttpClient) { }

   public apiCall():Observable<any>
  {
    return this.http.get('https://5f2a9ccd6ae5cc0016422c7b.mockapi.io/getEmployees');
  }
}