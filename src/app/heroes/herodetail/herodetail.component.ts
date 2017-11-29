import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {

  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  hero$: Observable<Hero>;

  constructor(private actRoute: ActivatedRoute,
              private router: Router,
              private heroService: HeroService) { }

  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }

  ngOnInit() {
    this.hero$ = this.actRoute.paramMap
    .switchMap((params: ParamMap) =>
      this.heroService.getHero(params.get('id')));
  }

}
