import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SteamApiService {
  

  constructor(private http:HttpClient) { }

  getData():Observable<any> {

    const url = "https://api.github.com/users/JandreErasmus/repos";  
    return this.http.get<any>(url)
  }
}
