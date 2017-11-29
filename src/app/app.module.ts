import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CrisislistComponent } from './crisis-center/crisislist/crisislist.component';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './pagenotfound.component';
import { HeroModule } from './heroes/hero.module';


@NgModule({
  declarations: [
    AppComponent,
    CrisislistComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HeroModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
