import { Injectable } from '@angular/core';
import { tap, map } from "rxjs/operators";
import { List } from "./list";

@Injectable({
  providedIn: 'root'
})

export class ListService {

  private _gameList: Array<List>;
  private _game: List;

  constructor() {
    this._gameList = new Array();
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

  addGame(uri: string, name: string) {
    this._game = new List(uri.split('/').pop(), name);
    this._gameList.push(this._game);
  }
 
  deleteGame(game:List){
    let index = this._gameList.findIndex(item => item.id==game.id);
    this._gameList.splice(index, 1);
  }
}