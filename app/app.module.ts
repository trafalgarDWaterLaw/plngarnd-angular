import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent }  from './app.component';
import {OnePieceDetails} from './onepiece-detail.component';
import {OnePieceService} from './onepiece.service';
import {OnePieceComponent} from './onepiece.component';
import {DashboardComponent} from './dashboard.component';
import { HttpModule }    from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [ BrowserModule, 
              FormsModule, 
              HttpModule,
              InMemoryWebApiModule.forRoot(InMemoryDataService), 
              RouterModule.forRoot([
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
              ]) 
            ],
  declarations: [ AppComponent, OnePieceDetails, OnePieceComponent, DashboardComponent],
  providers:[OnePieceService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
