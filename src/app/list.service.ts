import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
  list: string[] = [];
 
  add(list: string) {
    this.list.push(list);
  }
 
  clear() {
    this.list = [];
  }

  constructor() { }

}