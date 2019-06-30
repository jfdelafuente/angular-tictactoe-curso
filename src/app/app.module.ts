import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameModule } from './game/game.module';
import { IndexComponent } from './index/index.component';

import { GameComponent } from './game/game/game.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MyhttpService } from './myhttp.service';
import { ListComponent } from './list/list.component';
import { ListService } from './list.service';


const appRoutes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'new',
    component: GameComponent
  },
  {
    path: 'continue',
    component: GameComponent,
    data: {continue: true}
  },
  {
    path: 'continue/:id',
    component: GameComponent,
    data: {continue: true}
  },
    {
    path: 'list',
    component: ListComponent
  },
  { path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GameModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [MyhttpService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }