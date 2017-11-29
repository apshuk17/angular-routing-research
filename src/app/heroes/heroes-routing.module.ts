import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HerolistComponent } from './herolist/herolist.component';
import { HerodetailComponent } from './herodetail/herodetail.component';

const heroesRoutes: Routes = [
  { path: 'heroes',  component: HerolistComponent },
  { path: 'hero/:id', component: HerodetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule { }
