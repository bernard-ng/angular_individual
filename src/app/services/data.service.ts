import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import Series from '../models/series.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private data: Series[] = [
        {
            id: 1,
            name: "Game of thrones",
            season_released_at: "",
            season_count: 7,
            description: "À travers ces personnages « moralement ambigus », la série explore les sujets liés au pouvoir politique, au changement climatique, à la hiérarchie sociale, la religion, la guerre civile, la sexualité et à la violence en général. Game of Thrones a acquis une fanbase internationale exceptionnellement vaste et active.",
            review: "À travers ces personnages « moralement ambigus », la série explore les sujets liés au pouvoir politique, au changement climatique, à la hiérarchie sociale, la religion, la guerre civile, la sexualité et à la violence en général. Game of Thrones a acquis une fanbase internationale exceptionnellement vaste et active.",
            photo: "",
            comments:  [
                {
                    id: 1,
                    date: "",
                    author: "bernard",
                    content: "hello world"
                },
                {
                    id: 2,
                    date: "",
                    author: "bernard",
                    content: "hello world"
                },
                {
                    id: 3,
                    date: "",
                    author: "bernard",
                    content: "hello world"
                }
            ]
        },
        {
            id: 2,
            name: "Mr Robots",
            season_released_at: "",
            season_count: 7,
            description: "À travers ces personnages « moralement ambigus », la série explore les sujets liés au pouvoir politique, au changement climatique, à la hiérarchie sociale, la religion, la guerre civile, la sexualité et à la violence en général. Game of Thrones a acquis une fanbase internationale exceptionnellement vaste et active.",
            review: "À travers ces personnages « moralement ambigus », la série explore les sujets liés au pouvoir politique, au changement climatique, à la hiérarchie sociale, la religion, la guerre civile, la sexualité et à la violence en général. Game of Thrones a acquis une fanbase internationale exceptionnellement vaste et active.",
            photo: "",
            comments:  []
        },
        {
            id: 1,
            name: "Game of thrones",
            season_released_at: "",
            season_count: 7,
            description: "À travers ces personnages « moralement ambigus », la série explore les sujets liés au pouvoir politique, au changement climatique, à la hiérarchie sociale, la religion, la guerre civile, la sexualité et à la violence en général. Game of Thrones a acquis une fanbase internationale exceptionnellement vaste et active.",
            review: "À travers ces personnages « moralement ambigus », la série explore les sujets liés au pouvoir politique, au changement climatique, à la hiérarchie sociale, la religion, la guerre civile, la sexualité et à la violence en général. Game of Thrones a acquis une fanbase internationale exceptionnellement vaste et active.",
            photo: "",
            comments:  []
        },
        {
            id: 1,
            name: "Game of thrones",
            season_released_at: "",
            season_count: 7,
            description: "À travers ces personnages « moralement ambigus », la série explore les sujets liés au pouvoir politique, au changement climatique, à la hiérarchie sociale, la religion, la guerre civile, la sexualité et à la violence en général. Game of Thrones a acquis une fanbase internationale exceptionnellement vaste et active.",
            review: "À travers ces personnages « moralement ambigus », la série explore les sujets liés au pouvoir politique, au changement climatique, à la hiérarchie sociale, la religion, la guerre civile, la sexualité et à la violence en général. Game of Thrones a acquis une fanbase internationale exceptionnellement vaste et active.",
            photo: "",
            comments:  []
        },
        {
            id: 1,
            name: "Game of thrones",
            season_released_at: "",
            season_count: 7,
            description: "À travers ces personnages « moralement ambigus », la série explore les sujets liés au pouvoir politique, au changement climatique, à la hiérarchie sociale, la religion, la guerre civile, la sexualité et à la violence en général. Game of Thrones a acquis une fanbase internationale exceptionnellement vaste et active.",
            review: "À travers ces personnages « moralement ambigus », la série explore les sujets liés au pouvoir politique, au changement climatique, à la hiérarchie sociale, la religion, la guerre civile, la sexualité et à la violence en général. Game of Thrones a acquis une fanbase internationale exceptionnellement vaste et active.",
            photo: "",
            comments:  []
        },
    ]
    
    
    getSeries(): Observable<Series[]> {
        return of(this.data);
    }
}
