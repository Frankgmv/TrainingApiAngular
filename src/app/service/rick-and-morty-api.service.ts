import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class RickAndMortyApiService {

  private UrlCharacters1 = "https://rickandmortyapi.com/api/character?page=1";
  private UrlCharacters2 = "https://rickandmortyapi.com/api/character?page=2";
  private UrlLocations = "https://rickandmortyapi.com/api/location";
  private UrlEpisodes = "https://rickandmortyapi.com/api/episode";

  constructor(private http: HttpClient) {}

  getCharacters1(): Observable<any> {
    return this.http.get(this.UrlCharacters1);
  }
  getCharacters2(): Observable<any> {
    return this.http.get(this.UrlCharacters2);
  }
  getLocations(): Observable<any> {
    return this.http.get(this.UrlLocations);
  }
  getEpisodes(): Observable<any> {
    return this.http.get(this.UrlEpisodes);
  }
  
}
