import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { List } from './../list';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    games: List[] = [
  { id: "1evum5", name: "new game pepe" },
  { id: "17f1rh", name: "new game enrique" },
];

  constructor(public listService: ListService) { }

  delete(game: string) {
    console.log("delete", game)
  }

  ngOnInit() {
  }

}