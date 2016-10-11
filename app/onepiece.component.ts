import { Component, OnInit } from '@angular/core';
import {OnePiece} from './onepiece';
import {OnePieceService} from './onepiece.service';
import {Router} from '@angular/router';


@Component({
    selector: 'my-op',
    templateUrl: 'app/onepiece.component.html',
    styleUrls: ['app/onepiece.component.css']
})
export class OnePieceComponent implements OnInit{ 
  heroes:OnePiece[] = [];
  constructor(private onepiece_service:OnePieceService, private router:Router){
  }

  getOPCharacter(): void{
    this.onepiece_service.getCharacters().then(promiseResolved => this.heroes = promiseResolved);
  }
  selectedCrewMember:OnePiece; 
    
  ngOnInit(): void {
  this.getOPCharacter();
  }

  eventCall(hero:OnePiece): void {
      this.selectedCrewMember = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCrewMember.id]);
  }
}

