import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { List } from './../list';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
/**
    games: List[] = [
  { id: "1evum5", name: "new game pepe" },
  { id: "17f1rh", name: "new game enrique" },
];
*/

  private games: Array<List>;


  constructor(public listService: ListService) { }

  deleteGame(game: List) {
    console.log('delete', game.id);
    this.listService.deleteGame(game);
    this.fetchGames();
  }

  ngOnInit() {
    this.fetchGames();
  }

  fetchGames(): void {
    console.log('fetch games');
    this.games = this.listService.getGames();
    console.log('fech:', this.games);
  }

}