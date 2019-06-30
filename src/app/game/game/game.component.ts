import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService, State } from './../state.service';
import { MyhttpService } from './../../myhttp.service';
import { List } from './../../list';
import { ListService } from './../../list.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

	private _status: string = 'fetching';

	private _stateService: StateService;
  private _listService: ListService;
	private _playerName: string;

  private recurso: string;


	_handleSubmitClick() {
		this._stateService.state.player_name = this._playerName;
	}

  constructor(route: ActivatedRoute, stateService: StateService, listService: ListService, myhttpService: MyhttpService) {
  	this._stateService = stateService;
    this._listService = listService;
    if (route.snapshot.data.continue) {
      (route.snapshot.paramMap.get('id')) ? this.recurso = route.snapshot.paramMap.get('id') : (this._listService.latest) ? this.recurso = this._listService.latest : this.recurso="i216a";
      myhttpService.getSavedGame(this.recurso).subscribe((state:State) => {
  			stateService.state = state;
  			this._status = 'success';
  		}, error => {
  			this._status = error.statusText;
  		});
  	} else {
  		stateService.reset();
  		this._status = 'success';
  	}
  }

  ngOnInit() {
  }

}