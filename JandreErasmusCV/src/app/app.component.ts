import { Component, OnInit } from '@angular/core';
import {SteamApiService} from './steam-api.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'JandreErasmusCV';
  repos =[]
  constructor(private steamServices:SteamApiService){}

  getRepos() {

    this.steamServices.getData().subscribe((data) => {
      console.log(data)
      this.repos = data;
    })
  }
  
  ngOnInit()
  {
    this.getRepos();
  }
}
