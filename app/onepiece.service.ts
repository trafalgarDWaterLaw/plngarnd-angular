import {Injectable} from '@angular/core';
import {OnePiece} from './onepiece';
import {Heroes} from './mock-onepiece';

@Injectable()
export class OnePieceService{
    getCharacters():Promise<OnePiece[]>{
        return Promise.resolve(Heroes);
    }

} 