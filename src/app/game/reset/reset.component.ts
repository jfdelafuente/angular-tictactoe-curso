import { Component, OnInit } from '@angular/core';
import { StateService, State } from './../state.service';
import { MyhttpService } from './../../myhttp.service';
import { ListService } from './../../list.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  private _stateService:StateService;
  private _myhttpService: MyhttpService;
  private _listService: ListService;

  constructor(stateService:StateService, myhttpService: MyhttpService, listService: ListService) {
    this._stateService = stateService;
    this._myhttpService = myhttpService;
    this._listService = listService;
  }

  ngOnInit() {
  }

  _handleResetClick() {
    console.log("Reset click");
    this._stateService.reset();
  }

  _handleSaveGameClick() {
    console.log("Save click");
    /** 
    this._myhttpService.postSavedGame(this._stateService.state).subscribe((state:State) => {
        this._listService.addGame(state.uri, this._stateService.state.player_name);
      }, error => {
  			console.log("ERROR saved Player:", error );
      });
      */
  }

}