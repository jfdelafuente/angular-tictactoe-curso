import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { StateService } from './state.service';
import { FooterComponent } from './footer/footer.component';
import { ResetComponent } from './reset/reset.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GameComponent
  ],
  declarations: [GameComponent, HeaderComponent, BoardComponent, SquareComponent, FooterComponent, ResetComponent],
  providers: [StateService]
})
export class GameModule { }
