import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {OnePieceDetails} from './onepiece-detail.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, OnePieceDetails ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
