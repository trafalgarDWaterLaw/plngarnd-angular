import {OnePiece} from './onepiece';
import {Component, Input } from '@angular/core';

@Component({
 selector : 'my-op-details',
 template: `<div *ngIf="hero">
               <h2>{{hero.name}} detail's</h2>
               <div><label>Id: </label> {{hero.id}}</div>
               <div>
               <label>name: </label>
               <input [(ngModel)]="hero.name" placeholder="name"/>
               </div>
               </div>`
})

export class OnePieceDetails{
    @Input()
    hero: OnePiece;

}