import { Component, OnInit} from '@angular/core';
import { RickAndMortyApiService } from '../service/rick-and-morty-api.service';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.css']
})
export class CardStatusComponent implements OnInit{

  Character: any[] = [];

  constructor(private ruteCharacters: RickAndMortyApiService){}

  ngOnInit(): void {
    this.fullCharacters();
  }

  public fullCharacters(){
    this.ruteCharacters.getCharacters2().subscribe(data=>{
      this.Character = data.results;
    })
  }
}
