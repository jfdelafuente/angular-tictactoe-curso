import { Component, OnInit } from '@angular/core';
import { StateService } from './../state.service';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  private _stateService:StateService;

  constructor(stateService:StateService) {
    this._stateService = stateService;
  }

  ngOnInit() {
  }

  _handleResetClick() {
    console.log("Reset click");
    this._stateService.reset();
  }

  _handleSaveGameClick() {
    console.log("Save click");
    this._stateService.saveGame();
  }

}
