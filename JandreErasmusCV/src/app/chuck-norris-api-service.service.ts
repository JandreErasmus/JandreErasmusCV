import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'/*This is where I imported the HttpClient to be able to use the Chuck Norris api*/
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisApiServiceService {

  constructor(private http:HttpClient) { }

  getJoke():Observable<any> {
    
    const url = "https://api.chucknorris.io/jokes/random"
    return this.http.get<any>(url)// the .get() method is used to fetch data from the url
  }
}
