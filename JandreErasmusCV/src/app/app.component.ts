import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {SteamApiService} from './steam-api.service'//This is where I imported the github service to be able to use the github api
import {YoutubeApiServiceService} from './youtube-api-service.service'//This is where I imported the youtube service to be able to use the youtube api
import {ChuckNorrisApiServiceService} from './chuck-norris-api-service.service'//This is where I imported the Chuck Norris service to be able to use the Chuck Norris api

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'JandreErasmusCV';
  //This is the arrays for all the api data
  repos =[]//stores all the data from github
  jokes :any[] = [] // stores all the data collected from the api
  chann :any // stores all the data from the youtube api
  constructor(
    private steamServices:SteamApiService, 
    private youtubeService:YoutubeApiServiceService, 
    private chuckNorris:ChuckNorrisApiServiceService
    ){}

  getRepos() {

    this.steamServices.getData().subscribe((data) => { //this is where you call the function from the service and where you, the subrscribe is used for everytime there is new data, that data gets stored. 
      console.log(data)//this is used to check the data in the console
      this.repos = data;//This is where you populate the array
    })
  }
  getJokes(){
    this.chuckNorris.getJoke().subscribe((joke) =>{ //this is where you call the function from the service and where you, the subrscribe is used for everytime there is new data, that data gets stored. 
      console.log(joke)//this is used to check the data in the console
      this.jokes.push(joke)//This is where you populate the array
    })
  }
  
  ngOnInit()//The ngOnInit is used to call the functions when the page is loaded
  {
    this.getJokes();
    this.getRepos();
    this.youtubeService.getChannel().subscribe((data) => { //this is where you call the function from the service and where you, the subrscribe is used for everytime there is new data, that data gets stored. 
      console.log(data)//this is used to check the data in the console
      this.chann = data.items;//This is where you populate the array
    })
  }
}
