import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap, map } from "rxjs/operators";
import { List } from "./list";

const httpOptions = {
  headers:  new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ListService {

  private _gamesUrl = 'https://api.myjson.com/bins';
  /** 
  private _gameList: Array<List>;
  */
  private _gameList: Array<List>= [
  { id: "1evum5", name: "new game pepe" },
  { id: "17f1rh", name: "new game enrique" },
];

  constructor(private http: HttpClient) {
    /**
    this._gameList = new Array();
    */
  }

  get latest() {
    let index = this._gameList.length;
    if (index) {
      return this._gameList[index-1].id;
    }
    return null;
  }

  getGames() {
    return this._gameList;
  }

  getSavedGame(id) {
    let url = this._gamesUrl.concat('/', id);
    return this.http.get<List>(url)
      .pipe(
        map(res => List.fromJSON(url, res))
      );
  }

  addGame(game: List){
    return this.http.post<List>(this._gamesUrl, game, httpOptions)
      .pipe(
        tap(res => {
          game.uri = res['uri'];
          this._gameList.push(game);
        })
      );
  }

  updateGame(game: List) {
    return this.http.put<List>(game.uri, game, httpOptions)
      .pipe(
        tap(_ => {
          let index = this._gameList.findIndex(item => item.uri==game.uri);
          this._gameList.splice(index, 1);
          this._gameList.push(game)
        })
      );
  }

  deleteGame(game:List){
    console.log('Borrando ...', game);
    let index = this._gameList.findIndex(item => item.id==game.i);
    console.log('Borrando ...', game );
    console.log('en el index '+ index );
    this._gameList.splice(index, 1);
  }
}