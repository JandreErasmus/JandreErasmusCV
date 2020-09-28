import { Component, OnInit } from '@angular/core';
import {SteamApiService} from './steam-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JandreErasmusCV';
  constructor(private steamApiService:SteamApiService){
    this.steamApiService.getData().subscribe(data=>{
      console.warn(data)
    })
  }
  ngOnInit(){
   
    
    
  }

  
}
