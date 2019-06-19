import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface State {
    turn: string,
    values: string[][],
    count: number,
    ganador: boolean,
    player_name: string
}

@Injectable({
  providedIn: 'root'
})

export class StateService {

	private _state$: BehaviorSubject<State>;

  constructor() {

	  let initialState = {
	    turn: 'PLAYERX',
	    values: [
	      ['-','-','-'],
	      ['-','-','-'],
	      ['-','-','-']
	    ],
      count: 0,
      ganador: false,
      player_name: ''
	  };
	  this._state$ = new BehaviorSubject(initialState);
  }

  get state$ (): BehaviorSubject<State> {
    return this._state$;
  }

  get state (): State {
    return this._state$.getValue();
  }

  set state (state: State) {
    this._state$.next(state);
  }

  toPlay(newValue): Boolean {
    if ((this.state.values[0][0] === newValue &&
        this.state.values[0][1] === newValue &&
        this.state.values[0][2] === newValue ) ||
        (this.state.values[1][0] === newValue &&
        this.state.values[1][1] === newValue &&
        this.state.values[1][2] === newValue ) ||
        (this.state.values[2][0] === newValue &&
        this.state.values[2][1] === newValue &&
        this.state.values[2][2] === newValue ) ||
        (this.state.values[0][0] === newValue &&
        this.state.values[1][0] === newValue &&
        this.state.values[2][0] === newValue ) ||
        (this.state.values[0][1] === newValue &&
        this.state.values[1][1] === newValue &&
        this.state.values[2][1] === newValue ) ||
        (this.state.values[0][2] === newValue &&
        this.state.values[1][2] === newValue &&
        this.state.values[2][2] === newValue ) ||
        (this.state.values[0][0] === newValue &&
        this.state.values[1][1] === newValue &&
        this.state.values[2][2] === newValue ) ||
        (this.state.values[0][2] === newValue &&
        this.state.values[1][1] === newValue &&
        this.state.values[2][0] === newValue )) {
          return true;
        }
        return false;
  }

  updateValue(row, col) {
    if(this.state.values[row][col] === '-' ) {
      let newValue = this.state.turn === 'PLAYERX' ? 'X' : '0';
      let newTurn = this.state.turn === 'PLAYERX' ? 'PLAYER0' : 'PLAYERX';
      let newCount = this.state.count;
      this.state.values[row][col] = newValue;

      if ( this.toPlay(newValue)) {
        this.state.ganador = true;
      }
      this.state.turn = newTurn;
      this.state.count = newCount + 1;
      this._state$.next(this.state);
    }
  }


  reset() {
    this.state = {
      turn: 'PLAYERX',
      values: [
        ['-','-','-'],
        ['-','-','-'],
        ['-','-','-']
      ],
      count: 0,
      ganador: false,
      player_name: ''
    };
  }

}
