import { Component, OnInit } from '@angular/core';
import {OnePiece} from './onepiece';
import {OnePieceService} from './onepiece.service';


@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
               <ul class="heroes">
               <li *ngFor="let hero of heroes" (click)="eventCall(hero)" [class.selected]="hero===selectedCrewMember">
               <span class="badge">{{hero.id}}</span> {{hero.name}}
               </li>
               </ul>
               <my-op-details  [hero]="selectedCrewMember"></my-op-details>
                ` ,
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
providers: [OnePieceService]
})
export class AppComponent implements OnInit{ 
  heroes:OnePiece[] = [];
  constructor(private onepiece_service:OnePieceService){
  }

  getOPCharacter(): void{
    this.onepiece_service.getCharacters().then(promiseResolved => this.heroes = promiseResolved);
  }
  selectedCrewMember:OnePiece; 
  title: string = "Straw hats";
    
  ngOnInit(): void {
  this.getOPCharacter();
  }

  eventCall(hero:OnePiece): void {
      this.selectedCrewMember = hero;
  }
}

