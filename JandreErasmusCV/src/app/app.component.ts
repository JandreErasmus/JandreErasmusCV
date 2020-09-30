import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {SteamApiService} from './steam-api.service'
import {YoutubeApiServiceService} from './youtube-api-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'JandreErasmusCV';
  repos =[]
  chann :any
  constructor(private steamServices:SteamApiService, private youtubeService:YoutubeApiServiceService){}

  getRepos() {

    this.steamServices.getData().subscribe((data) => {
      console.log(data)
      this.repos = data;
    })
  }
  
  ngOnInit()
  {
    this.getRepos();
    this.youtubeService.getChannel().subscribe((data) => {
      console.log(data)
      this.chann = data.items;
    })
  }
}
