import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import Series from '../models/series.model';
import Comment from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Here the series data written by hands because we don't use the API
  private data: Series[] = [
    {
      id: 1,
      name: 'Game of thrones',
      season_released_at: new Date(),
      season_count: 7,
      description:
        'À travers ces personnages « moralement ambigus », la série explore les sujets liés au pouvoir politique, au changement climatique, à la hiérarchie sociale, la religion, la guerre civile, la sexualité et à la violence en général. Game of Thrones a acquis une fanbase internationale exceptionnellement vaste et active.',
      review:
        'Contrairement à une opinion répandue, le Lorem Ipsum est pas simplement du texte aléatoire.',
      photo: 'https://picsum.photos/200/300',
      comments: [
        {
          id: 1,
          date: '',
          author: 'Bernard',
          content:
            'Lorem Ipsum, vous devez être sûr qil ny a rien embarrassant caché dans le texte.',
        },
        {
          id: 2,
          date: '',
          author: 'Joseph',
          content:
            'hello world, like a foolish, longtemps que travailler avec du texte lisible',
        },
        {
          id: 3,
          date: '',
          author: 'Liliane',
          content:
            'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions',
        },
      ],
    },
    {
      id: 2,
      name: 'Americans Gods',
      season_released_at: new Date(),
      season_count: 8,
      description:
        'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. ',
      review:
        'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là',
      photo: 'https://picsum.photos/200/300',
      comments: [
        {
          id: 1,
          date: '',
          author: 'Andy',
          content: 'I like your movies',
        },
        {
          id: 2,
          date: '',
          author: 'Liseth',
          content: 'Good game',
        },
        {
          id: 3,
          date: '',
          author: 'Joyce',
          content: 'Welle done',
        },
        {
          id: 4,
          date: '',
          author: 'Kramogo',
          content: 'We need more',
        },
        {
          id: 5,
          date: '',
          author: 'Jessica',
          content: 'Excellent work',
        },
      ],
    },
    {
      id: 3,
      name: 'The blacklist',
      season_released_at: new Date(),
      season_count: 12,
      description:
        'De nombreuses suites logicielles de mise en page ou éditeurs de sites Web',
      review:
        'Changement climatique, à la hiérarchie sociale, la religion, la guerre civile.',
      photo: 'https://picsum.photos/200/300',
      comments: [
        {
          id: 1,
          date: '',
          author: 'Raymond',
          content: 'Lorem Ipsum',
        },
        {
          id: 2,
          date: '',
          author: 'Grady',
          content: 'hello world',
        },
      ],
    },
    {
      id: 4,
      name: 'The witcher',
      season_released_at: new Date(),
      season_count: 8,
      description:
        'Game of Thrones a acquis une fanbase internationale exceptionnellement vaste et active.',
      review: 'Les sujets liés au pouvoir politique, au changement climatique.',
      photo: 'https://picsum.photos/200/300',
      comments: [
        {
          id: 1,
          date: '',
          author: 'Jessica',
          content: 'GG',
        },
        {
          id: 2,
          date: '',
          author: 'Joriane',
          content: 'hello world',
        },
        {
          id: 3,
          date: '',
          author: 'Ayannah',
          content: 'Best movie',
        },
      ],
    },
    {
      id: 5,
      name: 'Malcolm',
      season_released_at: new Date(),
      season_count: 10,
      description:
        'De nombreuses suites logicielles de mise en page ou éditeurs de sites Web',
      review:
        'Like an a acquis une fanbase internationale exceptionnellement vaste et active.',
      photo: 'https://picsum.photos/200/300',
      comments: [
        {
          id: 1,
          date: '',
          author: 'Bernard',
          content: 'hello world',
        },
        {
          id: 2,
          date: '',
          author: 'Juston',
          content: 'Greatness',
        },
        {
          id: 3,
          date: '',
          author: 'Nicolas',
          content: 'Do it aigain',
        },
        {
          id: 4,
          date: '',
          author: 'Mimina',
          content: 'Hiiii every body',
        },
      ],
    },
    {
      id: 6,
      name: 'The Bold Type',
      season_released_at: new Date(),
      season_count: 4,
      description:
        'Lextrait standard de Lorem Ipsum utilisé depuis le XVIè siècle.',
      review: 'Le Lorem Ipsum ainsi obtenu ne contient aucune répétition.',
      photo: 'https://picsum.photos/200/300',
      comments: [
        {
          id: 1,
          date: '',
          author: 'Mariam',
          content: 'Perfect',
        },
        {
          id: 2,
          date: '',
          author: 'Danielle',
          content: 'Magnifyk',
        },
        {
          id: 3,
          date: '',
          author: 'Anna',
          content: 'hello world',
        },
      ],
    },
    {
      id: 7,
      name: 'La Pandemie',
      season_released_at: new Date(),
      season_count: 7,
      description:
        'La série explore les sujets liés au pouvoir politique, la religion, la guerre civile, exceptionnellement vaste et active.',
      review:
        'la série explore les sujets liés au pouvoir politique, au changement climatique, à la hiérarchie sociale.',
      photo: 'https://picsum.photos/200/300',
      comments: [
        {
          id: 1,
          date: '',
          author: 'Amédée',
          content: 'Fire to fire',
        },
        {
          id: 2,
          date: '',
          author: 'Mercy',
          content: 'hello world',
        },
        {
          id: 3,
          date: '',
          author: 'Bambina',
          content: 'Do it aigain please',
        },
      ],
    },
    {
      id: 8,
      name: 'La Reine du Sud',
      season_released_at: new Date(),
      season_count: 12,
      description:
        'Est a acquis une fanbase internationale exceptionnellement vaste et active.',
      review:
        'la série explore les sujets liés au pouvoir politique, violence en général active.',
      photo: 'https://picsum.photos/200/300',
      comments: [
        {
          id: 1,
          date: '',
          author: 'Giovani',
          content: 'hello world',
        },
        {
          id: 2,
          date: '',
          author: 'Glovenu',
          content: 'Mystic',
        },
        {
          id: 3,
          date: '',
          author: 'Jonathan',
          content: 'Hi hi hi hi',
        },
        {
          id: 4,
          date: '',
          author: 'Joriane',
          content: 'Hello hello hello',
        },
        {
          id: 5,
          date: '',
          author: 'Christiane',
          content: 'It is good',
        },
      ],
    },
    {
      id: 9,
      name: 'Casa Del Papa',
      season_released_at: new Date(),
      season_count: 7,
      description:
        'Lorem Ipsum, vous devez être sûr quil ny a rien dembarrassant caché dans le texte.',
      review: 'Un professeur du Hampden-Sydney College, en Virginie.',
      photo: 'https://picsum.photos/200/300',
      comments: [
        {
          id: 1,
          date: '',
          author: 'Baby',
          content: 'hello world',
        },
        {
          id: 2,
          date: '',
          author: 'Lucas',
          content: 'You are the best',
        },
      ],
    },
    {
      id: 10,
      name: 'Loïs et Clarck',
      season_released_at: new Date(),
      season_count: 25,
      description:
        'la série explore les sujets liés au pouvoir politique, fanbase internationale exceptionnellement vaste et active.',
      review:
        'sERIES a acquis une fanbase internationale exceptionnellement vaste et active.',
      photo: 'https://picsum.photos/200/300',
      comments: [
        {
          id: 1,
          date: '',
          author: 'Bernard',
          content: 'hello world',
        },
        {
          id: 2,
          date: '',
          author: 'Joseph',
          content: 'Good game',
        },
        {
          id: 3,
          date: '',
          author: 'Ayannah',
          content: 'Magnifyk',
        },
        {
          id: 4,
          date: '',
          author: 'Joriane',
          content: 'hello everybody',
        },
        {
          id: 5,
          date: '',
          author: 'Lisette',
          content: 'Very nice',
        },
        {
          id: 6,
          date: '',
          author: 'Shaloom',
          content: 'Fine girl',
        },
      ],
    },
  ];
  // This function with observable for the recuperation of all series from data services
  all(): Observable<Series[]> {
    return of(this.data);
  }
  // uncrement the id after creating a new serie
  increment(): number {
    const last = this.data[this.data.length - 1];
    return last.id + 1;
  }

  // Realize the crud of the application
  // create new serie
  create(data: Series): void {
    this.data.push(data);
  }
  // show the details of serie by id
  read(id: number): Observable<Series | undefined> {
    return of(this.data.find((s) => s.id === +id));
  }
  // edit the serie by id
  update(id: number, data: Series): void {
    const index = this.data.findIndex((s) => s.id === +id);
    this.data[index] = { ...data };
  }
  // delete the serie by id
  delete(id: number, data: Series[]): Observable<Series[]> {
    return of(data.filter((s) => s.id !== +id));
  }

  // This function with observable is about to delete a comment
  deleteComment(id: number, data: Comment[]): Observable<Comment[]> {
    return of(data.filter((c) => c.id !== +id));
  }
}
