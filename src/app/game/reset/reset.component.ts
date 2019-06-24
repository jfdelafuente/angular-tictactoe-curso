import { Component, OnInit } from '@angular/core';
import { StateService, State } from './../state.service';
import { MyhttpService } from './../../myhttp.service';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  private _stateService:StateService;
  private _myhttpService: MyhttpService;

  constructor(stateService:StateService, myhttpService: MyhttpService) {
    this._stateService = stateService;
    this._myhttpService = myhttpService;
  }

  ngOnInit() {
  }

  _handleResetClick() {
    console.log("Reset click");
    this._stateService.reset();
  }

  _handleSaveGameClick() {
    console.log("Save click");
    this._myhttpService.postSavedGame(this._stateService.state).subscribe((state:State) => {
        console.log("saved Player", state.uri);
      }, error => {
  			console.log("ERROR saved Player:", error );
  		});
  }

}
