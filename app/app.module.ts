import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent }  from './app.component';
import {OnePieceDetails} from './onepiece-detail.component';
import {OnePieceService} from './onepiece.service';
import {OnePieceComponent} from './onepiece.component';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, RouterModule.forRoot([
    {
      path: 'one-piece',
      component: OnePieceComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'detail/:id',
      component: OnePieceDetails
    },
  ]) ],
  declarations: [ AppComponent, OnePieceDetails, OnePieceComponent, DashboardComponent],
  providers:[OnePieceService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
