import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})
export class HerolistComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  selectedId: number;

  constructor(private heroService: HeroService,
              private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.heroes$ = this.actRoute.paramMap.switchMap(
      (params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.heroService.getHeroes();
      }
    );
  }

}
