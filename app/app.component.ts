import { Component } from '@angular/core';
import {AOE} from './aoe.component';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
                <h2>{{ageVar.name}} detail's<h2>
                <div><label>ID: </label>{{ageVar.id}}</div>
                <div><label>Name: </label>{{ageVar.name}}
                <input [(ngModel)]="ageVar.name" placeholder="This is the placeholder">
                </div>`  
})
export class AppComponent { 

    title: string = "Age Of Empires";
    hero: string = "Palladin";
    ageVar: AOE = {
        id: 1,
        name: "Halbeldier"
    };
}

