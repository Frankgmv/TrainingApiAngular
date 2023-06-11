import { Component, OnInit } from '@angular/core';
import { RickAndMortyApiService } from '../service/rick-and-morty-api.service';

@Component({
  selector: 'app-card-locations',
  templateUrl: './card-locations.component.html',
  styleUrls: ['./card-locations.component.css']
})
export class CardLocationsComponent implements OnInit {

  Locations: [] = [];

  constructor(private RutaLocations: RickAndMortyApiService){}

  ngOnInit(): void {
    this.FillLocations()
  }

  FillLocations(){
    this.RutaLocations.getLocations().subscribe(data=>{
      this.Locations = data.results;
    })
  }

}
