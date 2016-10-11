import { Component, OnInit } from '@angular/core';
import {OnePiece} from './onepiece';
import {OnePieceService} from './onepiece.service';
import { Router } from '@angular/router';
@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls:['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit{ 
     heroes: OnePiece[] = [];
     constructor(private onepiece_service:OnePieceService, private router:Router){}

     ngOnInit():void{
         this.onepiece_service.getCharacters().then(promiseResolved => this.heroes = promiseResolved.slice(0, 4));
     }

     gotoDetail(hero: OnePiece): void{
         let link = ['/detail', hero.id];
          this.router.navigate(link);
     }
}