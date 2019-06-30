import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StateService, State } from './game/state.service';

const httpOptions = {
  headers:  new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MyhttpService {

  private backendUrl: string = 'https://api.myjson.com/bins';

 
  constructor(private httpClient: HttpClient, stateService: StateService) { }


  getSavedGame (path: string) {
  	return this.httpClient.get(this.backendUrl + '/'+ path);
  }

  postSavedGame(player: StateService) {
    return this.httpClient.post(this.backendUrl, player, httpOptions);
  }
    
}