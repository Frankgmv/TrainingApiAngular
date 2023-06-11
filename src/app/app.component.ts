import { Component, OnInit } from '@angular/core';
import { RickAndMortyApiService } from './service/rick-and-morty-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Training_api_angular';

  Characters: any[] = [];

  constructor(private rutaCharacters: RickAndMortyApiService){}

  ngOnInit(): void {
    this.full_data();
  }

  full_data(){
    this.rutaCharacters.getCharacters1().subscribe(data=>{
      this.Characters = data.results;
    })
  }
}
