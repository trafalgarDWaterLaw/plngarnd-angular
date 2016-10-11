import {OnePiece}                   from './onepiece';
import {Component, Input, OnInit }          from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {OnePieceService}            from './onepiece.service';

@Component({
 selector : 'my-op-details',
 templateUrl: 'app/onepiece-detail.component.html',
 styleUrls: [ 'app/onepiece-detail.component.css' ]
})

export class OnePieceDetails implements OnInit{
    
    hero: OnePiece;
    constructor( private heroService: OnePieceService, private route: ActivatedRoute, private location: Location) {}
    ngOnInit(): void{
            this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
        .then(hero => this.hero = hero);
        });
    }

    goBack(): void {
        this.location.back();
    }

}