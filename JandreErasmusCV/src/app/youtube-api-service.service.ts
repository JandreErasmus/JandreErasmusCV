import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class YoutubeApiServiceService {

  constructor(private http:HttpClient) { }

  getChannel():Observable<any> {
    const API_KEY = "AIzaSyD3nE_8nsIgOa-HTcJGpGVeplqPYRUcJWc"
    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=MrTrustyRusty&type=channel&key="+API_KEY+"";
    return this.http.get<any>(url)
  }
}
