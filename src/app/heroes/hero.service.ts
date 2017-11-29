import { Injectable } from '@angular/core';

import { Hero } from './hero';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

const HEROES = [
  new Hero(11, 'Mr. Nice'),
  new Hero(12, 'Narco'),
  new Hero(13, 'Bombasto'),
  new Hero(14, 'Celeritas'),
  new Hero(15, 'Magneta'),
  new Hero(16, 'RubberMan')
];

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes() { return Observable.of(HEROES); }

  getHero(id: number | string) {
    return this.getHeroes()
    .map(heroes => heroes.find(hero => hero.id === +id));
  }

}
