import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
                <nav>
                <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                <a routerLink="/one-piece" routerLinkActive="active">Straw Hats</a>
                </nav>
                <router-outlet></router-outlet>`,
    styleUrls:['app/app.component.css']
})

export class AppComponent {
    title : string = "One Piece";
}