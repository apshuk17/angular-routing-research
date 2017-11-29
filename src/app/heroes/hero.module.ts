import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HerolistComponent } from './herolist/herolist.component';
import { HerodetailComponent } from './herodetail/herodetail.component';
import { HeroService } from './hero.service';
import { HeroRoutingModule } from './heroes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule,
    FormsModule
  ],
  declarations: [
    HerolistComponent,
    HerodetailComponent
  ],
  providers: [HeroService]
})
export class HeroModule { }
