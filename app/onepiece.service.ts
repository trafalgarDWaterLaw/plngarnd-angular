import {Injectable} from '@angular/core';
import {OnePiece} from './onepiece';
import { Headers, Http } from '@angular/http'; //For Http calls
import 'rxjs/add/operator/toPromise'; //add on module of angular


@Injectable()
export class OnePieceService{

   private herourl = 'app/heroes'; // URL to web api
  //private herourl = 'http://192.168.1.8:8000/shops/json/';
    constructor(private http:Http){}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }

    getCharacters():Promise<OnePiece[]>{
        return this.http.get(this.herourl)
                        .toPromise()
                        .then(resolve => resolve.json().data as OnePiece[])
                        .catch(this.handleError);

           //console.log(this.handleError);
    }

    getHero(id: number): Promise<OnePiece> {
  return this.getCharacters()
             .then(heroes => heroes.find(hero => hero.id === id));
    }

} 