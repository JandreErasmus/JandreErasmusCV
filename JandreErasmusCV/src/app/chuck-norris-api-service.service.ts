import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisApiServiceService {

  constructor(private http:HttpClient) { }

  getJoke():Observable<any> {
    
    const url = "https://api.chucknorris.io/jokes/random"
    return this.http.get<any>(url)
  }
}
