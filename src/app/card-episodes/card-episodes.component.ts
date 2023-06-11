import { Component, OnInit } from '@angular/core';
import { RickAndMortyApiService } from '../service/rick-and-morty-api.service';

@Component({
  selector: 'app-card-episodes',
  templateUrl: './card-episodes.component.html',
  styleUrls: ['./card-episodes.component.css']
})
export class CardEpisodesComponent implements OnInit {

  episodes: [] = [];

  constructor(private rutesEpisodes: RickAndMortyApiService) { }

  ngOnInit(): void {
    this.FillLocations()      
  }

  FillLocations(){
    this.rutesEpisodes.getEpisodes().subscribe(data=>{
      this.episodes = data.results;
    })
  }
}
